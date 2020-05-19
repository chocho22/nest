<template>
  <q-page class="flex flex-center">
    <img alt="고양이네" src="~assets/고양이.jpg" style="width:100%;height:100%;" />
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
