<template>
  <q-page class="flex flex-center">
    왼쪽 drawer<br>
    <!-- <img alt="고양이네" src="~assets/고양이.jpg" /> -->
    <slot></slot>
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
