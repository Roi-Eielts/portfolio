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
        <div class="card bg-transparent mb-3 w-100 border-0 mt-5 mb-5">
            <Tablet :image="data.image" />
            <div class="card-body text-white ">
                <h5 class="card-title">{{ data.projectName }}</h5>
                <p class="card-text">
                    {{ data.projectDescription }}
                </p>
            </div>
        </div>
        <div v-if="index != (jsonData.length - 1)">
            <hr>
        </div>
    </div>

</template>