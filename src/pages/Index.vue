<template>
  <q-page class="background">
     <!-- <q-img
          src=
          :ratio="16/9"
        /> -->
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  created() {
    console.log(this.$route.params);
  }
};
</script>

<style lang="scss">
  .background{
    width:100%;
    height:100%;
    background-image: url("~assets/고양이.jpg");
  }
</style>
