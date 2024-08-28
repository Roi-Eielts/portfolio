<script>
export default {
    methods: {
        sendMail() {
            window.location.href = "mailto:roieielts@gmail.com";
        },
        downloadResume() {
            const link = document.createElement('a');
            link.href = '../src/assets/Resume.pdf'
            link.target = '_blank'
            link.download = "Resume Roi Eielts.pdf"
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};
</script>

<script lang="application/javascript">
</script>
<template>
    <div class="mx-auto">
        <div class="row">
            <div class="col-md-6 mt-5 pt-5 ps-5">
                <h1 class="display-3 fw-bold">Roï Eielts</h1>
                <h3 class="color2">Student Software Developer</h3>
                <p class="color3">I am an exam year student software developer at scalda vlissigen.</p>

                <ul class="mt-5 d-sm-none d-md-block d-none d-sm-block">
                    <li id="navigation">
                        <a id="aboutMe" href="#" class="navText"><span class="navLine"></span>About me</a>
                    </li>
                </ul>
                <!-- <div>
                    <a class="offsiteLink" href="https://github.com/Roi-Eielts"><font-awesome-icon icon="fa-brands fa-github" /></a>
                </div> -->
            </div>
            <div class="col-md-6 mt-5 pt-5" data-bs-spy="scroll" data-bs-target="navigation"
                data-bs-smooth-scroll="true" tabindex="0">
                <div id="aboutMe">
                    <h2 class="fw-bolder">About me</h2>
                    <div class="ps-3">
                        <p>
                            I'm a young <b>software developer</b>, aged 20 from Heikenszand, Netherlands. I'm known
                            locally
                            for my
                            patience, positivity and independence. Likewise, I thrive on problem-solving, whether it’s
                            debugging
                            a code.
                        </p>
                        <p>
                            With some experience in front-end frameworks like: <b>angular, struts 2 and react</b>, I`m
                            able
                            to
                            build/create applications for people wich are dynamic and responsive by using
                            scss/bootstrap.
                            Next
                            to that I know how to code in java, C# and SQL. These skills/experience came from school
                            projects,
                            personal projects or internships.
                        </p>
                        <p>
                            I'm always <b>wanting to learn new programming languages and frameworks</b> to expand my
                            knowledge. This
                            portfolio site is an example because I wanted to learn <b>Vue.js</b>.
                        </p>
                        <p>
                            Let's speak together for an internship/job or download my resume to look for more
                            experiences!
                        </p>
                        <div class="d-flex justify-content-between">
                            <button class="mx-auto btn color" @click="downloadResume"><font-awesome-icon
                                    icon="fa-solid fa-download" class="me-2" />Resume</button>
                            <button class="mx-auto btn color" @click="sendMail"><font-awesome-icon
                                    icon="fa-solid fa-envelope" class="me-2" />Email me</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
