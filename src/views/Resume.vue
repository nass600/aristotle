<template>
    <v-container fluid>
        <v-row>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-bullseye-arrow" class="mr-2 text-primary"/>
                            <span>Basics</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-basics v-model="resume.basics"/>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-card-account-mail-outline" class="mr-2 text-primary"/>
                            <span>Contact</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-contact v-model="resume.basics"/>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-wan" class="mr-2 text-primary"/>
                            <span>Social</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-social
                            v-model="resume.basics.profiles"
                            :add-item="(value: ResumeSocialNetworkName) => resume.addSocialProfile(value)"
                            :remove-item="(index: number) => resume.basics.profiles?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-cog-outline" class="mr-2 text-primary"/>
                            <span>Skills</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-skills
                            v-model="resume.skills"
                            :add-item="() => resume.addSkill('')"
                            :remove-item="(index: number) => resume.skills?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-brain" class="mr-2 text-primary"/>
                            <span>Expertise</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-skills
                            v-model="resume.expertise"
                            :add-item="() => resume.addExpertise('')"
                            :remove-item="(index: number) => resume.expertise?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-tools" class="mr-2 text-primary"/>
                            <span>Technical Skills</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-skills
                            v-model="resume.technicalSkills"
                            :add-item="() => resume.addTechnicalSkill('')"
                            :remove-item="(index: number) => resume.technicalSkills?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-account-group-outline" class="mr-2 text-primary"/>
                            <span>Soft Skills</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-skills
                            v-model="resume.softSkills"
                            :add-item="() => resume.addSoftSkill('')"
                            :remove-item="(index: number) => resume.softSkills?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-translate" class="mr-2 text-primary"/>
                            <span>Languages</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-languages
                            v-model="resume.languages"
                            :add-item="(value: ResumeLanguageName) => resume.addLanguage(value)"
                            :remove-item="(index: number) => resume.languages?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-school-outline" class="mr-2 text-primary"/>
                            <span>Education</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-education
                            v-model="resume.education"
                            :add-item="() => resume.addEducation('')"
                            :remove-item="(index: number) => resume.education?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-briefcase-outline" class="mr-2 text-primary"/>
                            <span>Work</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-work
                            v-model="resume.work"
                            :add-item="() => resume.addWork('')"
                            :remove-item="(index: number) => resume.work?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-medal-outline" class="mr-2 text-primary"/>
                            <span>Awards</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-awards
                            v-model="resume.awards"
                            :add-item="() => resume.addAward('')"
                            :remove-item="(index: number) => resume.awards?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-certificate-outline" class="mr-2 text-primary"/>
                            <span>Certificates</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-certificates
                            v-model="resume.certificates"
                            :add-item="() => resume.addCertificate('')"
                            :remove-item="(index: number) => resume.certificates?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-bookmark-outline" class="mr-2 text-primary"/>
                            <span>Publications</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-publications
                            v-model="resume.publications"
                            :add-item="() => resume.addPublication('')"
                            :remove-item="(index: number) => resume.publications?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <v-icon icon="mdi-beer-outline" class="mr-2 text-primary"/>
                            <span>Interests</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <form-interests
                            v-model="resume.interests"
                            :add-item="() => resume.addInterest('')"
                            :remove-item="(index: number) => resume.interests?.splice(index, 1)"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useResumeStore } from '@/store/resume'
import FormBasics from '@/components/forms/FormBasics.vue'
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
import { ResumeLanguageName, ResumeSocialNetworkName } from '@/types/resume'

const resume = useResumeStore()
</script>

<style lang="scss">

    .v-card-text {
        overflow-y: auto;
        height: 100%;
    }
</style>
