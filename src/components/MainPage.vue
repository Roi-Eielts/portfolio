<script>
import Projects from './projects.vue'

export default {
    data() {
        return {
            knowledge: ["Scrum", "C#", "CSS", "JavaScript", "Java", "HTML", "PHP", "TypeScript", "Hibernate", ".Net", "Angular", "Bootstrap", "jQuery", "React Native", "React", "SCSS", "Spring", "Vue.js", "Three.js", "SEO"]        }
    },
    methods: {
        sendMail() {
            window.location.href = "mailto:roieielts@gmail.com";
        },
        downloadResume() {
            const link = document.createElement('a');
            link.href = '/portfolio/Resume.pdf';
            link.target = '_blank';
            link.download = "Resume_Roi_Eielts.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
    }
};
</script>
<template>
    <div class="container mx-auto">
        <div class="row">
            <div class="col-lg-6 d-lg-flex flex-column justify-content-lg-between sticky-lg-top"
                style="top: 0; max-height: 100vh; overflow-y: auto; padding-top: 6rem; padding-bottom: 6rem;">
                <div>
                    <div>
                        <a href="#">
                            <h1 class="headText">Roï Eielts</h1>
                        </a>
                        <h3 class="color2">Student Software Developer</h3>
                        <p class="color3">A cup of coffee is a must have <font-awesome-icon icon="fa-solid fa-mug-hot" class="me-2" /></p>
                    </div>
                    <ul class="mt-5 d-sm-none d-md-block d-none d-sm-block">
                        <li class="ls-none">
                            <a class="navText" :class="{ 'activeNav': currentSection === 'aboutMe' }" href="#aboutMe">
                                <span class="navLine"></span>About me
                            </a>
                        </li>
                        <li class="ls-none">
                            <a class="navText" :class="{ 'activeNav': currentSection === 'Knowledge' }"
                                href="#Knowledge">
                                <span class="navLine"></span>Knowledge
                            </a>
                        </li>
                        <li class="ls-none">
                            <a class="navText" :class="{ 'activeNav': currentSection === 'projects' }"
                                href="#projects">
                                <span class="navLine"></span>Projects
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex">
                    <div class="mx-auto">
                        <a class="offsiteLink me-4" href="https://github.com/Roi-Eielts">
                            <font-awesome-icon class="h-100" icon="fa-brands fa-github" />
                        </a>
                        <a class="offsiteLink me-4" href="https://www.linkedin.com/in/roi-eielts/">
                            <font-awesome-icon class="h-100 linkedIn" icon="fa-brands fa-linkedin" />
                        </a>
                        <a class="offsiteLink" @click="sendMail" href="#">
                            <font-awesome-icon icon="fa-solid fa-envelope" class="h-100 gmail" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex col-md-6">
                <main>
                    <section class="min-vh-100">
                        <h2 id="aboutMe" class="fw-bolder mt-5 pt-5">About me</h2>
                        <div class="ps-3">
                            <p>
                                I'm a young <b>software developer</b>, aged 20 from Heikenszand, Netherlands.
                                I'm
                                known
                                locally
                                for my
                                patience, positivity and independence. Likewise, I thrive on problem-solving,
                                whether
                                it’s
                                debugging
                                a code.
                            </p>
                            <p>
                                With some experience in front-end frameworks like: <b>angular, struts 2 and
                                    react</b>,
                                I`m
                                able
                                to
                                build/create applications for people wich are dynamic and responsive by using
                                scss/bootstrap.
                                Next
                                to that I know how to code in java, C# and SQL. These skills/experience came
                                from
                                school
                                projects,
                                personal projects or internships.
                            </p>
                            <p>
                                I'm always <b>wanting to learn new programming languages and frameworks</b> to
                                expand my
                                knowledge. This
                                portfolio site is an example because I wanted to learn <b>Vue.js</b>.
                            </p>
                            <p>
                                Let's speak together for an internship/job or download my resume to look for
                                more
                                experiences!
                            </p>
                        </div>
                        <div class="d-flex justify-content-between mt-5">
                                <button class="mx-auto btn color" @click="downloadResume">
                                    <font-awesome-icon icon="fa-solid fa-download" class="me-2" />Resume</button>
                                <button class="mx-auto btn color" @click="sendMail">
                                    <font-awesome-icon icon="fa-solid fa-envelope" class="me-2" />Email me</button>

                        </div>
                    </section>
                    <section class="min-vh-100 w-100">
                        <h2 id="Knowledge" class="fw-bolder mt-5 pt-5">Knowledge</h2>
                        <div class="d-flex flex-wrap mt-4">
                            <div v-for="knownledge in knowledge">
                                <div class="mb-4 me-4 py-2 px-3 bg-success rounded">
                                    <p class="fw-bold fs-5 m-0 p-0 d-inline-flex">{{ knownledge }}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="min-vh-100">
                        <h2 id="projects" class="fw-bolder mt-5 pt-5">Projects</h2>
                        <div class="ps-3">
                            <Projects/>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentSection = ref('')

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    currentSection.value = entry.target.getAttribute('id');
                }
            });
        },
        {
            rootMargin: '0px 0px -50% 0px',
        }
    );

    document.querySelectorAll('section h2').forEach((section) => {
        observer.observe(section);
    });
});
</script>
<style lang="scss" scoped>
@import '../assets/main.scss';
</style>