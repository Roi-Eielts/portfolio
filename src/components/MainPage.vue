<script>
export default {
    methods: {
        sendMail() {
            window.location.href = "mailto:roieielts@gmail.com";
        },
        downloadResume() {
            const link = document.createElement('a');
            link.href = '../src/assets/Resume.pdf';
            link.target = '_blank';
            link.download = "Resume Roi Eielts.pdf";
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
                        <a href="#" class="text-decoration-none text-reset">
                            <h1 class="display-3 fw-bold">Roï Eielts</h1>
                        </a>
                        <h3 class="color2">Student Software Developer</h3>
                        <p class="color3">I am an exam year student software developer at Scalda Vlissingen.</p>
                    </div>
                    <ul class="mt-5 d-sm-none d-md-block d-none d-sm-block">
                        <li class="ls-none">
                            <a class="navText" :class="{ 'activeNav': currentSection === 'aboutMe' }" href="#aboutMe">
                                <span class="navLine"></span>About me
                            </a>
                        </li>
                        <li class="ls-none">
                            <a class="navText" :class="{ 'activeNav': currentSection === 'languages' }"
                                href="#languages">
                                <span class="navLine"></span>Languages/Frameworks/Pre-processors
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex">
                    <div class="mx-auto">
                        <a class="offsiteLink me-4" href="https://github.com/Roi-Eielts">
                            <font-awesome-icon class="h-100" icon="fa-brands fa-github" />
                        </a>
                        <a class="offsiteLink me-4" href="https://github.com/Roi-Eielts">
                            <font-awesome-icon class="h-100 linkedIn" icon="fa-brands fa-linkedin" />
                        </a>
                        <a class="offsiteLink" @click="sendMail" href="#">
                            <font-awesome-icon icon="fa-solid fa-envelope" class="h-100 gmail" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex col-md-6 mt-5 pt-5">
                <main class="mt-5">
                    <section class="min-vh-100">
                        <h2 id="aboutMe" class="fw-bolder">About me</h2>
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
                            <div class="d-flex justify-content-between">
                                <button class="mx-auto btn color" @click="downloadResume">
                                    <font-awesome-icon icon="fa-solid fa-download" class="me-2" />Resume</button>
                                <button class="mx-auto btn color" @click="sendMail">
                                    <font-awesome-icon icon="fa-solid fa-envelope" class="me-2" />Email me</button>

                            </div>
                        </div>
                    </section>
                    <section class="min-vh-100">
                        <h2 id="languages" class="fw-bolder">Languages/Frameworks/Pre-processors</h2>
                        <p class="ps-4">Here I will show the programming languages, frameworks and front-end
                            pre-processors I know.</p>
                        <div class="ps-2">
                            <div class="w-100 h-auto d-inline-block">
                                <h4>Languages</h4>
                                <ul>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">PHP</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star"
                                                class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star"
                                                class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star"
                                                class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">C#</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star-half" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">SQL</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">Java</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">JavaScript</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">HTML/CSS</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-100 h-auto d-inline-block">
                                <h4>Pre-processor</h4>
                                <ul>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">SCSS</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-100 h-auto d-inline-block">
                                <h4>Frameworks</h4>
                                <ul>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">React Native</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star-half" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">Struts 2</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star-half" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">Angular</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star-half" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">React</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                    <li class="d-flex align-middle">
                                        <p class="float-start w-50">Bootstrap</p>
                                        <div class="float-end p-0 w-50">
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                            <font-awesome-icon icon="fa-solid fa-star" class="m-0 me-2 p-0 text-warning" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
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