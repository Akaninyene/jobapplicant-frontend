<template>
  <div class="dashboard-page">
    <header class="header-section">
      <router-link to="/" class="brand" aria-label="DreamJob Connect home">
        <span class="brand-name">DREAMJOB <span class="brand-highlight">CONNECT</span></span>
        <span class="brand-slogan">Bridging the Gap Between You and Your Dream Job.</span>
      </router-link>
      <nav class="top-navigation" aria-label="Main navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/aboutus">About Us</router-link>
        <router-link to="/contactus">Contact Us</router-link>
        <button class="logout-button" type="button" @click="goHome">Exit</button>
      </nav>
    </header>

    <main class="dashboard-main">
      <section class="page-intro">
        <p class="eyebrow">YOUR CAREER, YOUR FUTURE</p>
        <h1>Applicant Registration</h1>
        <p>Complete each section of your profile. You can save your progress and return later.</p>
        <div class="progress-area">
          <div class="progress-label"><span>Application progress</span><strong>{{ completionPercent }}%</strong></div>
          <div class="progress-track"><div class="progress-fill" :style="{ width: completionPercent + '%' }"></div></div>
        </div>
      </section>

      <div class="dashboard-layout">
        <aside class="sidebar" aria-label="Application sections">
          <h2>Application sections</h2>
          <button
            v-for="(section, index) in sections"
            :key="section.id"
            type="button"
            class="section-link"
            :class="{ active: currentSection === index, complete: sectionIsComplete(section.id) }"
            @click="goToSection(index)"
          >
            <span class="section-number">{{ sectionIsComplete(section.id) ? '✓' : index + 1 }}</span>
            <span class="section-name">{{ section.label }}</span>
            <span v-if="currentSection === index" class="active-arrow">›</span>
          </button>
          <div class="sidebar-note"><strong>Helpful tip</strong><p>Save your progress regularly. Fields marked * are required.</p></div>
        </aside>

        <section class="form-card">
          <div class="form-card-heading">
            <div>
              <p class="step-label">SECTION {{ currentSection + 1 }} OF {{ sections.length }}</p>
              <h2>{{ sections[currentSection].label }}</h2>
              <p class="section-description">{{ sectionDescriptions[sections[currentSection].id] }}</p>
            </div>
            <span class="step-pill">{{ currentSection + 1 }} / {{ sections.length }}</span>
          </div>

          <form @submit.prevent="nextSection">
            <!-- Personal information -->
            <div v-if="activeId === 'personal'" class="form-section">
              <div class="photo-upload">
                <div class="photo-preview">
                  <img v-if="photoPreview" :src="photoPreview" alt="Applicant profile preview" />
                  <span v-else class="photo-placeholder">👤</span>
                </div>
                <div class="photo-copy"><strong>Profile photograph</strong><p>Upload a clear, recent photo (JPG or PNG).</p><label class="secondary-button upload-label">Choose photo<input type="file" accept="image/*" @change="handlePhoto" /></label></div>
              </div>
              <div class="form-grid">
                <label>First name *<input v-model.trim="form.personal.firstName" required autocomplete="given-name" /></label>
                <label>Middle name<input v-model.trim="form.personal.middleName" autocomplete="additional-name" /></label>
                <label>Last name *<input v-model.trim="form.personal.lastName" required autocomplete="family-name" /></label>
                <label>Date of birth<input v-model="form.personal.dateOfBirth" type="date" /></label>
                <label>Gender<select v-model="form.personal.gender"><option value="">Select gender</option><option>Female</option><option>Male</option><option>Prefer not to say</option><option>Self-describe</option></select></label>
                <label>Marital status<select v-model="form.personal.maritalStatus"><option value="">Select status</option><option>Single</option><option>Married</option><option>Divorced</option><option>Widowed</option><option>Prefer not to say</option></select></label>
                <label>Email address *<input v-model.trim="form.personal.email" type="email" required autocomplete="email" /></label>
                <label>Phone number *<input v-model.trim="form.personal.phone" type="tel" required autocomplete="tel" /></label>
                <label>Alternative phone number<input v-model.trim="form.personal.alternativePhone" type="tel" /></label>
                <label class="full-width">Address<input v-model.trim="form.personal.address" autocomplete="street-address" /></label>
                <label>Village / Town<input v-model.trim="form.personal.village" /></label>
                <label>Local government / District<input v-model.trim="form.personal.localGovernment" /></label>
                <label>State / Region<input v-model.trim="form.personal.state" /></label>
                <label>Nationality<input v-model.trim="form.personal.nationality" /></label>
                <label>Postcode<input v-model.trim="form.personal.postcode" autocomplete="postal-code" /></label>
              </div>
              <h3 class="subheading">Next of kin</h3>
              <div class="form-grid">
                <label>Full name<input v-model.trim="form.personal.nextOfKinName" /></label>
                <label>Phone number<input v-model.trim="form.personal.nextOfKinPhone" type="tel" /></label>
                <label>Relationship<input v-model.trim="form.personal.nextOfKinRelationship" /></label>
              </div>
            </div>

            <!-- Education -->
            <div v-else-if="activeId === 'education'" class="form-section">
              <div v-for="(education, index) in form.education" :key="education.id" class="repeat-card">
                <div class="repeat-heading"><h3>Education {{ index + 1 }}</h3><button v-if="form.education.length > 1" class="text-button danger-text" type="button" @click="removeEducation(index)">Remove</button></div>
                <div class="form-grid">
                  <label class="full-width">Name of institution *<input v-model.trim="education.institution" required /></label>
                  <label>Faculty / School<input v-model.trim="education.faculty" /></label>
                  <label>Department<input v-model.trim="education.department" /></label>
                  <label>Course of study<input v-model.trim="education.fieldOfStudy" /></label>
                  <label>Qualification obtained *<input v-model.trim="education.qualification" required placeholder="e.g. BSc, MSc, Diploma" /></label>
                  <label>Grade or classification<input v-model.trim="education.grade" /></label>
                  <label>Start date<input v-model="education.startDate" type="date" /></label>
                  <label>Completion date<input v-model="education.completionDate" type="date" /></label>
                  <label>Country of study<input v-model.trim="education.country" /></label>
                  <label class="full-width">Certificate or transcript<input type="file" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" @change="event => setSingleFile(event, education, 'certificate')" /><small>{{ education.certificate?.name || 'No file selected' }}</small></label>
                </div>
              </div>
              <button class="add-button" type="button" @click="addEducation">＋ Add education and qualification</button>
            </div>

            <!-- Work experience -->
            <div v-else-if="activeId === 'experience'" class="form-section">
              <div v-for="(job, index) in form.experience" :key="job.id" class="repeat-card">
                <div class="repeat-heading"><h3>Work experience {{ index + 1 }}</h3><button v-if="form.experience.length > 1" class="text-button danger-text" type="button" @click="removeExperience(index)">Remove</button></div>
                <div class="form-grid">
                  <label>Employer / organisation *<input v-model.trim="job.employer" required /></label>
                  <label>Job title *<input v-model.trim="job.jobTitle" required /></label>
                  <label>Employment type<select v-model="job.employmentType"><option value="">Select type</option><option>Full-time</option><option>Part-time</option><option>Contract</option><option>Temporary</option><option>Self-employed</option><option>Internship</option><option>Volunteer</option></select></label>
                  <label>Work location<input v-model.trim="job.location" /></label>
                  <label>Start date<input v-model="job.startDate" type="date" /></label>
                  <label>End date<input v-model="job.endDate" type="date" :disabled="job.currentlyWorking" /></label>
                  <label class="checkbox-label full-width"><input v-model="job.currentlyWorking" type="checkbox" @change="job.currentlyWorking && (job.endDate = '')" /> I currently work here</label>
                  <label class="full-width">Main responsibilities<textarea v-model.trim="job.responsibilities" rows="3" placeholder="Describe your main duties and responsibilities"></textarea></label>
                  <label class="full-width">Key achievements<textarea v-model.trim="job.achievements" rows="3" placeholder="Share achievements or results"></textarea></label>
                  <label class="full-width">Reason for leaving (optional)<textarea v-model.trim="job.reasonForLeaving" rows="2"></textarea></label>
                  <label>Supervisor / Employer name<input v-model.trim="job.supervisorName" /></label>
                  <label>Supervisor / Employer job title<input v-model.trim="job.supervisorTitle" /></label>
                  <label>Supervisor / Employer email<input v-model.trim="job.supervisorEmail" type="email" /></label>
                  <label>Supervisor / Employer phone number<input v-model.trim="job.supervisorPhone" type="tel" /></label>
                </div>
              </div>
              <button class="add-button" type="button" @click="addExperience">＋ Add work experience</button>
            </div>

            <!-- Skills -->
            <div v-else-if="activeId === 'skills'" class="form-section">
              <label>Skills <textarea v-model.trim="form.skills" rows="9" placeholder="Describe your skills e.g professional skills, computer skills, communication skills, and other relevant abilities."></textarea></label>
              <p class="field-hint">Tip: Include skills relevant to the roles you hope to apply for. Give examples where possible.</p>
            
              <label>Qualities<textarea v-model.trim="form.qualities" rows="9" placeholder="Describe your qualities e.g. Accountability, Integrity, Respect and other relevant qualities."></textarea></label>
              <p class="field-hint">Tip: Include qualities relevant to the roles you hope to apply for. Give examples where possible.</p>
            </div>

            
            <!-- Documents -->
            <div v-else-if="activeId === 'documents'" class="form-section">
              <p class="section-description standalone-description">Add your CV and any supporting documents. Give each file a clear document name, then choose the file. Use “Add another document” to add more items.</p>
              <div v-for="(document, index) in form.documents" :key="document.id" class="repeat-card document-card">
                <div class="repeat-heading"><h3>Document {{ index + 1 }}</h3><button v-if="form.documents.length > 1" class="text-button danger-text" type="button" @click="removeDocument(index)">Remove</button></div>
                <div class="form-grid">
                  <label>Document name *<input v-model.trim="document.name" required placeholder="e.g. CV, BSc Certificate, Cover Letter" /></label>
                  <label>Document type<select v-model="document.type"><option value="">Choose type</option><option>CV or résumé</option><option>Cover letter</option><option>Educational certificate</option><option>Academic transcript</option><option>Professional certificate</option><option>Portfolio or work sample</option><option>Employment reference</option><option>Other</option></select></label>
                  <label class="full-width">Choose file *<input type="file" required accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt" @change="event => setSingleFile(event, document, 'file')" /><small>{{ document.file?.name || 'No file selected' }}</small></label>
                </div>
              </div>
              <button class="add-button" type="button" @click="addDocument">＋ Add another document</button>
              <p class="field-hint">For this front-end version, selected files are shown in the form but are not uploaded to a server. Backend upload is needed for permanent storage.</p>
            </div>

            <!-- References -->
            <div v-else-if="activeId === 'references'" class="form-section">
              <p class="section-description standalone-description">For each referee, choose whether to complete the reference details below or upload a reference document.</p>
              <div v-for="(reference, index) in form.references" :key="reference.id" class="repeat-card">
                <div class="repeat-heading"><h3>Reference {{ index + 1 }}</h3><button v-if="form.references.length > 1" class="text-button danger-text" type="button" @click="removeReference(index)">Remove</button></div>
                <div class="choice-row">
                  <label class="radio-card"><input v-model="reference.method" type="radio" value="form" /> Fill in reference form</label>
                  <label class="radio-card"><input v-model="reference.method" type="radio" value="upload" /> Upload reference document</label>
                </div>
                <div v-if="reference.method === 'form'" class="form-grid reference-fields">
                  <label>Referee's full name *<input v-model.trim="reference.fullName" required /></label>
                  <label>Job title<input v-model.trim="reference.jobTitle" /></label>
                  <label>Organisation<input v-model.trim="reference.organisation" /></label>
                  <label>Professional relationship<input v-model.trim="reference.relationship" placeholder="e.g. Former manager" /></label>
                  <label>Email address<input v-model.trim="reference.email" type="email" /></label>
                  <label>Phone number<input v-model.trim="reference.phone" type="tel" /></label>
                  <label>Preferred time to contact (optional)<input v-model.trim="reference.preferredTime" placeholder="e.g. Weekday afternoons" /></label>
                  <label class="checkbox-label"><input v-model="reference.permissionToContact" type="checkbox" /> Permission to contact this referee</label>
                </div>
                <div v-else class="form-grid reference-fields">
                  <label class="full-width">Reference document *<input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" @change="event => setSingleFile(event, reference, 'file')" /><small>{{ reference.file?.name || 'No file selected' }}</small></label>
                  <label class="checkbox-label full-width"><input v-model="reference.permissionToContact" type="checkbox" /> Permission to contact this referee, if needed</label>
                </div>
              </div>
              <button class="add-button" type="button" @click="addReference">＋ Add another reference</button>
            </div>

            <!-- Review -->
            <div v-else-if="activeId === 'review'" class="form-section review-section">
              <div class="review-notice"><span>✓</span><div><strong>Review your application</strong><p>Check your details carefully before submitting. Use the Edit buttons to return to a section.</p></div></div>
              <div class="review-card"><div class="review-heading"><h3>Personal information</h3><button type="button" class="text-button" @click="goToSection(0)">Edit</button></div><p><strong>Name:</strong> {{ fullName || 'Not provided' }}</p><p><strong>Email:</strong> {{ form.personal.email || 'Not provided' }}</p><p><strong>Phone:</strong> {{ form.personal.phone || 'Not provided' }}</p><p><strong>Address:</strong> {{ form.personal.address || 'Not provided' }}</p></div>
              <div class="review-card"><div class="review-heading"><h3>Education & qualifications</h3><button type="button" class="text-button" @click="goToSection(1)">Edit</button></div><p>{{ form.education.filter(e => e.institution || e.qualification).length }} education record(s) added</p><p v-for="education in form.education.filter(e => e.institution || e.qualification)" :key="education.id">{{ education.qualification || 'Qualification not specified' }} — {{ education.institution || 'Institution not specified' }}</p></div>
              <div class="review-card"><div class="review-heading"><h3>Work experience</h3><button type="button" class="text-button" @click="goToSection(2)">Edit</button></div><p>{{ form.experience.filter(e => e.employer || e.jobTitle).length }} work record(s) added</p><p v-for="job in form.experience.filter(e => e.employer || e.jobTitle)" :key="job.id">{{ job.jobTitle || 'Role not specified' }} — {{ job.employer || 'Employer not specified' }}</p></div>
              <div class="review-card"><div class="review-heading"><h3>Skills & qualities</h3><button type="button" class="text-button" @click="goToSection(3)">Edit</button></div><p class="preserve-lines">{{ form.skills || 'Not provided' }}</p></div>
              <div class="review-card"><div class="review-heading"><h3>Documents</h3><button type="button" class="text-button" @click="goToSection(4)">Edit</button></div><p v-for="doc in form.documents.filter(d => d.name || d.file)" :key="doc.id">{{ doc.name || doc.file?.name }} <span v-if="doc.file">— {{ doc.file.name }}</span></p><p v-if="!form.documents.some(d => d.name || d.file)">No documents added.</p></div>
              <div class="review-card"><div class="review-heading"><h3>References</h3><button type="button" class="text-button" @click="goToSection(5)">Edit</button></div><p>{{ form.references.filter(r => r.fullName || r.file).length }} reference(s) added</p></div>
              <label class="checkbox-label declaration"><input v-model="form.declaration" type="checkbox" required /> I confirm that the information provided is accurate and complete to the best of my knowledge. *</label>
              <p class="field-hint">Submitting here demonstrates the front-end flow only. Connect this form to your backend before using it for real applications.</p>
            </div>

            <p v-if="statusMessage" class="status-message" role="status">{{ statusMessage }}</p>
            <div class="form-actions">
              <button class="secondary-button" type="button" :disabled="currentSection === 0" @click="previousSection">← Previous</button>
              <div class="action-right">
                <button class="text-button" type="button" @click="showPreview = true">Preview</button>
                <button class="text-button save-button" type="button" @click="saveProgress">Save for later</button>
                <button v-if="activeId !== 'review'" class="primary-button" type="submit">Save & Next →</button>
                <button v-else class="primary-button" type="button" @click="submitApplication">Submit application ✓</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>

    <footer class="footer-section"><p>© 2026 DREAMJOB CONNECT. All rights reserved.</p><p>Empowering people. Inspiring careers. Building futures.</p></footer>

    <div v-if="showPreview" class="modal-backdrop" @click.self="showPreview = false">
      <section class="preview-modal" role="dialog" aria-modal="true" aria-labelledby="preview-title">
        <div class="review-heading"><h2 id="preview-title">Application preview</h2><button class="text-button" type="button" @click="showPreview = false">Close ✕</button></div>
        <p><strong>Applicant:</strong> {{ fullName || 'Not provided' }}</p><p><strong>Email:</strong> {{ form.personal.email || 'Not provided' }}</p>
        <p><strong>Education records:</strong> {{ form.education.filter(e => e.institution || e.qualification).length }}</p><p><strong>Work experience records:</strong> {{ form.experience.filter(e => e.employer || e.jobTitle).length }}</p><p><strong>Documents:</strong> {{ form.documents.filter(d => d.name || d.file).length }}</p><p><strong>References:</strong> {{ form.references.filter(r => r.fullName || r.file).length }}</p>
        <button class="primary-button" type="button" @click="showPreview = false">Return to application</button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentSection = ref(0)
const statusMessage = ref('')
const showPreview = ref(false)
const photoPreview = ref('')
let nextId = 1
const makeId = () => nextId++

const sections = [
  { id: 'personal', label: 'Personal Information' },
  { id: 'education', label: 'Education & Qualifications' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'skills', label: 'Skills & Qualities' },
  { id: 'documents', label: 'CV & Supporting Documents' },
  { id: 'references', label: 'References' },
  { id: 'review', label: 'Review & Submit' }
]
const sectionDescriptions = {
  personal: 'Tell us about yourself and how we can contact you.',
  education: 'Add your educational background and qualifications.',
  experience: 'Share your employment history and professional achievements.',
  skills: 'Highlight the skills and qualities you can bring to an opportunity.',
  documents: 'Name and attach your CV and supporting documents.',
  references: 'Provide referee details or upload reference documents.',
  review: 'Review the information you have entered before submitting.'
}
const activeId = computed(() => sections[currentSection.value].id)
const form = reactive({
  personal: {
    firstName: '', middleName: '', lastName: '', dateOfBirth: '', gender: '', maritalStatus: '', email: '', phone: '', alternativePhone: '', address: '', village: '', localGovernment: '', state: '', nationality: '', postcode: '', nextOfKinName: '', nextOfKinPhone: '', nextOfKinRelationship: '', photoName: ''
  },
  education: [{ id: makeId(), institution: '', faculty: '', department: '', fieldOfStudy: '', qualification: '', grade: '', startDate: '', completionDate: '', country: '', certificate: null }],
  experience: [{ id: makeId(), employer: '', jobTitle: '', employmentType: '', location: '', startDate: '', endDate: '', currentlyWorking: false, responsibilities: '', achievements: '', reasonForLeaving: '', supervisorName: '', supervisorTitle: '', supervisorEmail: '', supervisorPhone: '' }],
  skills: '',
  documents: [{ id: makeId(), name: '', type: '', file: null }],
  references: [{ id: makeId(), method: 'form', fullName: '', jobTitle: '', organisation: '', relationship: '', email: '', phone: '', permissionToContact: false, preferredTime: '', file: null }],
  declaration: false
})
const fullName = computed(() => [form.personal.firstName, form.personal.middleName, form.personal.lastName].filter(Boolean).join(' '))
const completionPercent = computed(() => {
  const checks = [
    Boolean(form.personal.firstName && form.personal.lastName && form.personal.email && form.personal.phone),
    form.education.some(e => e.institution && e.qualification),
    form.experience.some(e => e.employer && e.jobTitle),
    Boolean(form.skills.trim()),
    form.documents.some(d => d.name && d.file),
    form.references.some(r => r.method === 'form' ? Boolean(r.fullName) : Boolean(r.file)),
    form.declaration
  ]
  return Math.round((checks.filter(Boolean).length / checks.length) * 100)
})

function sectionIsComplete(id) {
  if (id === 'personal') return Boolean(form.personal.firstName && form.personal.lastName && form.personal.email && form.personal.phone)
  if (id === 'education') return form.education.some(e => e.institution && e.qualification)
  if (id === 'experience') return form.experience.some(e => e.employer && e.jobTitle)
  if (id === 'skills') return Boolean(form.skills.trim())
  if (id === 'documents') return form.documents.some(d => d.name && d.file)
  if (id === 'references') return form.references.some(r => r.method === 'form' ? Boolean(r.fullName) : Boolean(r.file))
  if (id === 'review') return form.declaration
  return false
}
function goToSection(index) { currentSection.value = index; statusMessage.value = '' }
function previousSection() { if (currentSection.value > 0) goToSection(currentSection.value - 1) }
function nextSection() { if (currentSection.value < sections.length - 1) { saveProgress(false); currentSection.value += 1; statusMessage.value = '' } }
function addEducation() { form.education.push({ id: makeId(), institution: '', faculty: '', department: '', fieldOfStudy: '', qualification: '', grade: '', startDate: '', completionDate: '', country: '', certificate: null }) }
function removeEducation(index) { form.education.splice(index, 1) }
function addExperience() { form.experience.push({ id: makeId(), employer: '', jobTitle: '', employmentType: '', location: '', startDate: '', endDate: '', currentlyWorking: false, responsibilities: '', achievements: '', reasonForLeaving: '', supervisorName: '', supervisorTitle: '', supervisorEmail: '', supervisorPhone: '' }) }
function removeExperience(index) { form.experience.splice(index, 1) }
function addDocument() { form.documents.push({ id: makeId(), name: '', type: '', file: null }) }
function removeDocument(index) { form.documents.splice(index, 1) }
function addReference() { form.references.push({ id: makeId(), method: 'form', fullName: '', jobTitle: '', organisation: '', relationship: '', email: '', phone: '', permissionToContact: false, preferredTime: '', file: null }) }
function removeReference(index) { form.references.splice(index, 1) }
function setSingleFile(event, target, property) { const file = event.target.files?.[0]; if (file) target[property] = file }
function handlePhoto(event) {
  const file = event.target.files?.[0]
  if (!file) return
  form.personal.photoName = file.name
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value)
  photoPreview.value = URL.createObjectURL(file)
}
function saveProgress(showMessage = true) {
  // Files cannot be stored in localStorage. Save text fields only; real file storage needs a backend.
  const snapshot = JSON.parse(JSON.stringify({
    personal: { ...form.personal },
    education: form.education.map(({ certificate, ...rest }) => rest),
    experience: form.experience,
    skills: form.skills,
    documents: form.documents.map(({ file, ...rest }) => ({ ...rest, fileName: file?.name || '' })),
    references: form.references.map(({ file, ...rest }) => ({ ...rest, fileName: file?.name || '' })),
    declaration: form.declaration,
    currentSection: currentSection.value
  }))
  try {
    localStorage.setItem('dreamjobApplicantDraft', JSON.stringify(snapshot))
    if (showMessage) statusMessage.value = 'Your draft has been saved in this browser. Uploaded files are not saved.'
  } catch {
    if (showMessage) statusMessage.value = 'The draft could not be saved in this browser. Please copy your information before leaving.'
  }
}
function restoreDraft() {
  try {
    const saved = localStorage.getItem('dreamjobApplicantDraft')
    if (!saved) return
    const draft = JSON.parse(saved)
    if (draft.personal) Object.assign(form.personal, draft.personal)
    if (Array.isArray(draft.education) && draft.education.length) form.education.splice(0, form.education.length, ...draft.education.map(e => ({ ...e, id: makeId(), certificate: null })))
    if (Array.isArray(draft.experience) && draft.experience.length) form.experience.splice(0, form.experience.length, ...draft.experience.map(e => ({ ...e, id: makeId() })))
    if (typeof draft.skills === 'string') form.skills = draft.skills
    if (Array.isArray(draft.documents) && draft.documents.length) form.documents.splice(0, form.documents.length, ...draft.documents.map(d => ({ ...d, id: makeId(), file: null })))
    if (Array.isArray(draft.references) && draft.references.length) form.references.splice(0, form.references.length, ...draft.references.map(r => ({ ...r, id: makeId(), file: null })))
    form.declaration = Boolean(draft.declaration)
    if (Number.isInteger(draft.currentSection)) currentSection.value = Math.min(Math.max(draft.currentSection, 0), sections.length - 1)
  } catch { /* Ignore a damaged draft and allow a new application. */ }
}
function submitApplication() {
  if (!form.declaration) { statusMessage.value = 'Please tick the declaration before submitting.'; return }
  if (!form.personal.firstName || !form.personal.lastName || !form.personal.email || !form.personal.phone) {
    statusMessage.value = 'Please complete the required personal information first.'
    goToSection(0)
    return
  }
  showPreview.value = true
  statusMessage.value = 'Your application has passed the front-end checks. Connect a backend API to submit it securely.'
}

//exit function on the menu bar

function goHome() { router.push('/') }
onMounted(restoreDraft)
watch(currentSection, () => { statusMessage.value = '' })

</script>

<style scoped>
.dashboard-page { min-height: 100vh; background: #f8f7fc; color: #25213b; font-family: Arial, Helvetica, sans-serif; }
.header-section { display: flex; justify-content: space-between; align-items: center; gap: 28px; padding: 20px 7%; background: #332653; color: white; }
.brand { display: inline-flex; flex-direction: column; gap: 5px; color: white; text-decoration: none; flex-shrink: 0; }
.brand-name { font-size: 24px; font-weight: 800; letter-spacing: 1px; line-height: 1.2; }
.brand-highlight { color: #d6b8ff; }
.brand-slogan { color: #eee7fb; font-size: 12px; line-height: 1.5; }
.top-navigation { display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 22px; }
.top-navigation a { color: white; text-decoration: none; font-size: 14px; }
.top-navigation a:hover, .top-navigation a.router-link-exact-active { color: #d6b8ff; }
.logout-button { padding: 10px 18px; color: #49346f; background: white; border: 0; border-radius: 8px; font-weight: 700; cursor: pointer; }
.dashboard-main { width: min(1400px, 100%); margin: 0 auto; padding: 42px 5% 65px; }
.page-intro { max-width: 760px; margin-bottom: 28px; }
.eyebrow, .step-label { margin: 0 0 9px; color: #7650b4; font-size: 12px; font-weight: 800; letter-spacing: 1.8px; }
.page-intro h1 { margin: 0 0 10px; color: #2d2445; font-size: clamp(28px, 3vw, 38px); }
.page-intro > p:not(.eyebrow) { color: #6d657c; line-height: 1.7; margin: 0; }
.progress-area { margin-top: 23px; max-width: 540px; }
.progress-label { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 8px; color: #5f566f; font-size: 13px; }
.progress-label strong { color: #49346f; }
.progress-track { height: 8px; overflow: hidden; border-radius: 99px; background: #e6dff1; }
.progress-fill { height: 100%; border-radius: inherit; background: #7650b4; transition: width .25s ease; }
.dashboard-layout { display: grid; grid-template-columns: 265px minmax(0, 1fr); align-items: start; gap: 25px; }
.sidebar { position: sticky; top: 20px; padding: 22px 15px; border-radius: 15px; background: #332653; box-shadow: 0 10px 28px #33265314; color: white; }
.sidebar h2 { margin: 0 10px 17px; font-size: 16px; }
.section-link { display: flex; align-items: center; gap: 10px; width: 100%; margin: 4px 0; padding: 12px 10px; border: 1px solid transparent; border-radius: 9px; background: transparent; color: #f5f0ff; text-align: left; cursor: pointer; transition: background .2s ease; }
.section-link:hover { background: #493b65; }
.section-link.active { background: #d6b8ff; color: #332653; font-weight: 700; }
.section-link.complete:not(.active) .section-number { background: #dff5e8; color: #197347; }
.section-number { display: grid; place-items: center; flex: 0 0 27px; width: 27px; height: 27px; border-radius: 8px; background: #493b65; color: white; font-size: 12px; font-weight: 700; }
.active .section-number { background: white; color: #49346f; }
.section-name { flex: 1; font-size: 12px; line-height: 1.4; }
.active-arrow { font-size: 22px; line-height: 1; }
.sidebar-note { margin: 22px 5px 0; padding: 14px; border: 1px solid #594873; border-radius: 10px; background: #3d2f5b; }
.sidebar-note strong { color: #d6b8ff; font-size: 12px; }
.sidebar-note p { margin: 7px 0 0; color: #eee7fb; font-size: 11px; line-height: 1.6; }
.form-card { min-width: 0; padding: clamp(20px, 3vw, 34px); border: 1px solid #eee7f7; border-radius: 16px; background: white; box-shadow: 0 12px 35px #2920440b; }
.form-card-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding-bottom: 23px; margin-bottom: 25px; border-bottom: 1px solid #eee8f5; }
.form-card-heading h2 { margin: 0 0 8px; color: #302448; font-size: clamp(21px, 2.2vw, 27px); }
.section-description { margin: 0; color: #746d80; font-size: 13px; line-height: 1.7; }
.step-pill { padding: 7px 11px; border-radius: 99px; background: #eee5ff; color: #5d3a98; white-space: nowrap; font-size: 12px; font-weight: 700; }
.form-section { display: grid; gap: 22px; }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px 20px; }
.form-grid label, .form-section > label { display: flex; flex-direction: column; gap: 8px; color: #403451; font-size: 13px; font-weight: 700; min-width: 0; }
input:not([type="checkbox"]):not([type="radio"]):not([type="file"]), select, textarea { box-sizing: border-box; width: 100%; min-width: 0; padding: 12px 13px; border: 1px solid #ded6e9; border-radius: 8px; outline: none; background: #fff; color: #302448; font: inherit; font-weight: 400; }
input:focus, select:focus, textarea:focus { border-color: #8965c2; box-shadow: 0 0 0 3px #7650b41a; }
input[type="file"] { width: 100%; max-width: 100%; color: #6d657c; font-size: 12px; font-weight: 400; }
textarea { resize: vertical; line-height: 1.6; }
small, .field-hint { color: #7b7288; font-size: 12px; line-height: 1.6; font-weight: 400; }
.full-width { grid-column: 1 / -1; }
.subheading { margin: 4px 0 -7px; color: #392a57; font-size: 16px; }
.photo-upload { display: flex; align-items: center; gap: 18px; padding: 18px; border: 1px dashed #cdbde5; border-radius: 12px; background: #fcfaff; }
.photo-preview { display: grid; place-items: center; width: 88px; height: 88px; overflow: hidden; flex: 0 0 88px; border-radius: 50%; background: #eee5ff; }
.photo-preview img { width: 100%; height: 100%; object-fit: cover; }
.photo-placeholder { font-size: 38px; }
.photo-copy strong { color: #392a57; font-size: 14px; }
.photo-copy p { margin: 6px 0 11px; color: #746d80; font-size: 12px; }
.upload-label { display: inline-flex !important; flex-direction: row !important; align-items: center; width: fit-content; cursor: pointer; }
.upload-label input { display: none; }
.repeat-card { padding: 20px; border: 1px solid #eee7f7; border-radius: 12px; background: #fdfcff; }
.repeat-heading, .review-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
.repeat-heading h3, .review-heading h3 { margin: 0; color: #392a57; font-size: 15px; }
.add-button { justify-self: start; padding: 11px 15px; border: 1px dashed #9b7bc8; border-radius: 8px; background: #f6f0ff; color: #5d3a98; font-size: 13px; font-weight: 700; cursor: pointer; }
.add-button:hover { background: #eee5ff; }
.text-button { padding: 6px 4px; border: 0; background: transparent; color: #7650b4; font-size: 12px; font-weight: 700; cursor: pointer; }
.text-button:hover { color: #49346f; text-decoration: underline; }
.danger-text { color: #a33d52; }
.checkbox-label { display: flex !important; flex-direction: row !important; align-items: center; gap: 9px !important; color: #51465f !important; font-size: 12px !important; font-weight: 500 !important; }
.checkbox-label input { accent-color: #7650b4; width: 16px; height: 16px; }
.choice-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 20px; }
.radio-card { display: flex; align-items: center; gap: 9px; padding: 13px; border: 1px solid #ded6e9; border-radius: 9px; color: #51465f; font-size: 12px; cursor: pointer; }
.radio-card input { accent-color: #7650b4; }
.reference-fields { margin-top: 8px; }
.standalone-description { margin-bottom: -3px; }
.review-notice { display: flex; gap: 13px; padding: 17px; border: 1px solid #d9efdf; border-radius: 10px; background: #f3fbf5; }
.review-notice > span { display: grid; place-items: center; flex: 0 0 30px; height: 30px; border-radius: 50%; background: #dff5e8; color: #197347; font-weight: 800; }
.review-notice strong { color: #24583a; font-size: 14px; }
.review-notice p { margin: 5px 0 0; color: #52735e; font-size: 12px; line-height: 1.6; }
.review-card { padding: 17px; border: 1px solid #eee7f7; border-radius: 10px; }
.review-card .review-heading { margin-bottom: 10px; }
.review-card p { margin: 7px 0; color: #6d657c; font-size: 12px; line-height: 1.6; overflow-wrap: anywhere; }
.review-card p strong { color: #403451; }
.preserve-lines { white-space: pre-wrap; }
.declaration { padding: 14px; border-radius: 8px; background: #f8f5ff; }
.status-message { margin: 20px 0 0; padding: 12px 14px; border-radius: 8px; background: #f2edff; color: #49346f; font-size: 12px; line-height: 1.6; }
.form-actions { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding-top: 24px; margin-top: 27px; border-top: 1px solid #eee8f5; }
.action-right { display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 13px; }
.primary-button, .secondary-button { display: inline-flex; justify-content: center; align-items: center; gap: 8px; padding: 12px 17px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; cursor: pointer; transition: background .2s ease, transform .2s ease; }
.primary-button { border: 1px solid #7650b4; background: #7650b4; color: white; }
.primary-button:hover { background: #5d3a98; transform: translateY(-1px); }
.secondary-button { border: 1px solid #b9a5d9; background: white; color: #49346f; }
.secondary-button:hover { background: #f5efff; }
button:disabled { opacity: .45; cursor: not-allowed; }
.footer-section { padding: 24px 7%; background: #332653; color: #eee7fb; text-align: center; }
.footer-section p { margin: 5px 0; font-size: 12px; line-height: 1.7; }
.modal-backdrop { position: fixed; z-index: 20; inset: 0; display: grid; place-items: center; padding: 20px; background: #171023a8; }
.preview-modal { width: min(600px, 100%); max-height: 85vh; overflow-y: auto; padding: 25px; border-radius: 15px; background: white; box-shadow: 0 20px 70px #0003; }
.preview-modal h2 { margin: 0; color: #302448; font-size: 22px; }
.preview-modal p { color: #6d657c; font-size: 13px; line-height: 1.7; overflow-wrap: anywhere; }
@media (max-width: 900px) { .dashboard-layout { grid-template-columns: 1fr; } .sidebar { position: static; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; } .sidebar h2, .sidebar-note { grid-column: 1 / -1; } .section-link { margin: 0; } }
@media (max-width: 600px) { .header-section { flex-direction: column; align-items: flex-start; padding: 20px 6%; } .top-navigation { justify-content: flex-start; gap: 14px; } .top-navigation a { font-size: 12px; } .dashboard-main { padding: 30px 5% 45px; } .sidebar { grid-template-columns: 1fr; padding: 13px; } .sidebar h2 { margin-bottom: 8px; } .form-card { padding: 19px 15px; } .form-grid, .choice-row { grid-template-columns: 1fr; } .form-card-heading { gap: 8px; } .step-pill { font-size: 10px; } .photo-upload { align-items: flex-start; } .form-actions { align-items: stretch; flex-direction: column-reverse; } .action-right { justify-content: space-between; } .form-actions > button, .action-right .primary-button { flex: 1; } .repeat-card { padding: 15px; } }
</style>
