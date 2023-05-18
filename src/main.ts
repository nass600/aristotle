// Components
import App from './App.vue'
import { OhVueIcon } from "oh-vue-icons"
import SectionBasics from '@/components/sections/SectionBasics.vue'
import SectionContact from '@/components/sections/SectionContact.vue'
import SectionSocial from '@/components/sections/SectionSocial.vue'
import SectionSummary from '@/components/sections/SectionSummary.vue'
import SectionWork from '@/components/sections/SectionWork.vue'
import SectionCertificates from '@/components/sections/SectionCertificates.vue'
import SectionEducation from '@/components/sections/SectionEducation.vue'
import SectionPublications from '@/components/sections/SectionPublications.vue'
import SectionSkills from '@/components/sections/SectionSkills.vue'
import SectionAwards from '@/components/sections/SectionAwards.vue'
import SectionInterests from '@/components/sections/SectionInterests.vue'
import SectionLanguages from '@/components/sections/SectionLanguages.vue'
import SectionVolunteer from '@/components/sections/SectionVolunteer.vue'
import SectionProjects from '@/components/sections/SectionProjects.vue'
import SectionReferences from '@/components/sections/SectionReferences.vue'
import FormBasics from '@/components/forms/FormBasics.vue'
import FormSummary from '@/components/forms/FormSummary.vue'
import FormContact from '@/components/forms/FormContact.vue'
import FormSocial from '@/components/forms/FormSocial.vue'
import FormSkills from '@/components/forms/FormSkills.vue'
import FormLanguages from '@/components/forms/FormLanguages.vue'
import FormWork from '@/components/forms/FormWork.vue'
import FormEducation from '@/components/forms/FormEducation.vue'
import FormAwards from '@/components/forms/FormAwards.vue'
import FormCertificates from '@/components/forms/FormCertificates.vue'
import FormPublications from '@/components/forms/FormPublications.vue'
import FormInterests from '@/components/forms/FormInterests.vue'
import FormVolunteer from '@/components/forms/FormVolunteer.vue'
import FormProjects from '@/components/forms/FormProjects.vue'
import FormReferences from '@/components/forms/FormReferences.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)
app.component("ov-icon", OhVueIcon)
app.component("SectionBasics", SectionBasics)
app.component("SectionContact", SectionContact)
app.component("SectionSocial", SectionSocial)
app.component("SectionSummary", SectionSummary)
app.component("SectionWork", SectionWork)
app.component("SectionCertificates", SectionCertificates)
app.component("SectionEducation", SectionEducation)
app.component("SectionPublications", SectionPublications)
app.component("SectionSkills", SectionSkills)
app.component("SectionAwards", SectionAwards)
app.component("SectionInterests", SectionInterests)
app.component("SectionLanguages", SectionLanguages)
app.component("SectionVolunteer", SectionVolunteer)
app.component("SectionProjects", SectionProjects)
app.component("SectionReferences", SectionReferences)
app.component("FormBasics", FormBasics)
app.component("FormSummary", FormSummary)
app.component("FormContact", FormContact)
app.component("FormSocial", FormSocial)
app.component("FormSkills", FormSkills)
app.component("FormLanguages", FormLanguages)
app.component("FormWork", FormWork)
app.component("FormEducation", FormEducation)
app.component("FormAwards", FormAwards)
app.component("FormCertificates", FormCertificates)
app.component("FormPublications", FormPublications)
app.component("FormInterests", FormInterests)
app.component("FormVolunteer", FormVolunteer)
app.component("FormProjects", FormProjects)
app.component("FormReferences", FormReferences)
app.mount('#app')
