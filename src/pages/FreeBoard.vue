<template>
  <div class="q-px-lg q-pb-md center">Free Board 페이지 입니다!</div>
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
.background {
  width: 100%;
  height: 100%;
  // background-image: url("~assets/고양이.jpg");
}
</style>
