<script>
import Tablet from "./tablet.vue"
import json from "./../assets/projects.json";

export default {
    components: {
        Tablet
    },
    data() {
        return {
            jsonData: json.projects
        }
    }
}
</script>
<template>
    <div v-for="(data, index) in jsonData">
        <div class="card bg-transparent mb-3 w-100 border-0 mt-5 mb-5" :key="index">
            <Tablet :image="data.image" />
            <div class="card-body text-white mt-5">
                <h4 class="card-title">{{ data.projectName }}</h4>
                <p class="card-text ms-3">
                    {{ data.projectDescription }}
                </p>
                <div v-if="data.links" class="d-flex flex-row">
                    <div v-for="(link, index) in data.links" :key="index" class="mx-auto">
                        <div v-if="link.frontEnd" class="d-inline-flex">
                            <a class="text-decoration-none projectLink me-4" :href="link.frontEnd" target="_blank">
                                <span class="h-100 me-2 my-auto">Front-End</span><font-awesome-icon icon="fa-solid fa-up-right-from-square" />
                            </a>
                        </div>
                        <div v-if="link.backend" class="d-inline-flex">
                            <a class="text-decoration-none projectLink align-middle my-auto" :href="link.backend" target="_blank">
                                <span class="h-100 me-2 my-auto">Backend</span><font-awesome-icon icon="fa-solid fa-up-right-from-square" />
                            </a>
                        </div>
                        <div v-if="link.github" class="d-inline-flex">
                            <a class="text-decoration-none projectLink align-middle my-auto" :href="link.github" target="_blank">
                                <span class="h-100 me-2 my-auto">Github</span><font-awesome-icon icon="fa-solid fa-up-right-from-square" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="index != (jsonData.length - 1)">
            <hr>
        </div>
    </div>

</template>