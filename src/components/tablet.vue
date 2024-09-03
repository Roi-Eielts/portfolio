<script>
export default {
  props: ['image'],
}
</script>

<template>
  <div class="tablet w-100 rounded-4 bg-secondary p-1">
    <div class="screen bg-dark rounded-4 d-flex h-100 pe-2 pt-auto pb-auto justify-content-end" :style="{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <!-- <img :src="image" class="w-100 rounded"/> -->
        <div class="vr float-end text-primary border-start border-5 h-50 rounded-5 my-auto border-dark"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.tablet {
    aspect-ratio: 16/9;
}
</style>