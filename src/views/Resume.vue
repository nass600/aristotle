<template>
    <v-container fluid>
        <v-row>
            <v-expansion-panels>
                <v-expansion-panel
                    v-for="section in config.formSections"
                    v-bind:key="`form-section-${section.name.toLowerCase()}`"
                >
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <ov-icon :name="section.icon" :scale="1.25" class="mr-4 text-primary"/>
                            <span>{{ section.title }}</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <component
                            v-if="section.name === SectionName.BASICS"
                            :is="`form-${section.component}`"
                            v-model="resume.basics"
                        />
                        <component
                            v-if="section.name === SectionName.CONTACT"
                            :is="`form-${section.component}`"
                            v-model="resume.basics"
                        />
                        <component
                            v-if="section.name === SectionName.SOCIAL"
                            :is="`form-${section.component}`"
                            v-model="resume.basics.profiles"
                            :add-item="resume.addSocial"
                            :remove-item="resume.removeSocial"
                        />
                        <component
                            v-if="section.name === SectionName.SKILLS"
                            :is="`form-${section.component}`"
                            v-model="resume.skills"
                            :add-item="resume.addSkills"
                            :remove-item="resume.removeSkills"
                        />
                        <component
                            v-if="section.name === SectionName.EXPERTISE"
                            :is="`form-${section.component}`"
                            v-model="resume.expertise"
                            :add-item="resume.addExpertise"
                            :remove-item="resume.removeExpertise"
                        />
                        <component
                            v-if="section.name === SectionName.TECHNICAL_SKILLS"
                            :is="`form-${section.component}`"
                            v-model="resume.technicalSkills"
                            :add-item="resume.addTechnicalSkills"
                            :remove-item="resume.removeTechnicalSkills"
                        />
                        <component
                            v-if="section.name === SectionName.SOFT_SKILLS"
                            :is="`form-${section.component}`"
                            v-model="resume.softSkills"
                            :add-item="resume.addSoftSkills"
                            :remove-item="resume.removeSoftSkills"
                        />
                        <component
                            v-if="section.name === SectionName.EDUCATION"
                            :is="`form-${section.component}`"
                            v-model="resume.education"
                            :add-item="resume.addEducation"
                            :remove-item="resume.removeEducation"
                        />
                        <component
                            v-if="section.name === SectionName.WORK"
                            :is="`form-${section.component}`"
                            v-model="resume.work"
                            :add-item="resume.addWork"
                            :remove-item="resume.removeWork"
                        />
                        <component
                            v-if="section.name === SectionName.AWARDS"
                            :is="`form-${section.component}`"
                            v-model="resume.awards"
                            :add-item="resume.addAwards"
                            :remove-item="resume.removeAwards"
                        />
                        <component
                            v-if="section.name === SectionName.CERTIFICATES"
                            :is="`form-${section.component}`"
                            v-model="resume.certificates"
                            :add-item="resume.addCertificates"
                            :remove-item="resume.removeCertificates"
                        />
                        <component
                            v-if="section.name === SectionName.VOLUNTEER"
                            :is="`form-${section.component}`"
                            v-model="resume.volunteer"
                            :add-item="resume.addVolunteer"
                            :remove-item="resume.removeVolunteer"
                        />
                        <component
                            v-if="section.name === SectionName.REFERENCES"
                            :is="`form-${section.component}`"
                            v-model="resume.references"
                            :add-item="resume.addReferences"
                            :remove-item="resume.removeReferences"
                        />
                        <component
                            v-if="section.name === SectionName.PROJECTS"
                            :is="`form-${section.component}`"
                            v-model="resume.projects"
                            :add-item="resume.addProjects"
                            :remove-item="resume.removeProjects"
                        />
                        <component
                            v-if="section.name === SectionName.PUBLICATIONS"
                            :is="`form-${section.component}`"
                            v-model="resume.publications"
                            :add-item="resume.addPublications"
                            :remove-item="resume.removePublications"
                        />
                        <component
                            v-if="section.name === SectionName.INTERESTS"
                            :is="`form-${section.component}`"
                            v-model="resume.interests"
                            :add-item="resume.addInterests"
                            :remove-item="resume.removeInterests"
                        />
                        <component
                            v-if="section.name === SectionName.LANGUAGES"
                            :is="`form-${section.component}`"
                            v-model="resume.languages"
                            :add-item="resume.addLanguages"
                            :remove-item="resume.removeLanguages"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/store/config'
import { useResumeStore } from '@/store/resume'
import { SectionName } from '@/types/config'

const config = useConfigStore()
const resume = useResumeStore()
</script>
