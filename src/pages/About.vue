<template>
  <div>
    <div class="q-pa-xl q-pb-md q-mx-auto float-left" style="width:500px;">
      <q-card clickable class="my-card">
        <q-img src="~assets/cat/시리.jpg" basic>
          <div class="absolute-bottom text-h6">시리</div>
        </q-img>

        <q-card-section>{{ siri }}</q-card-section>
      </q-card>
    </div>
    <div class="q-pa-xl q-pb-md q-mx-auto" style="width:500px; display:inline-block;">
      <q-card clickable class="my-card">
        <q-img src="~assets/cat/시우.jpg" basic>
          <div class="absolute-bottom text-h6">시우</div>
        </q-img>

        <q-card-section>{{ siwoo }}</q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  created() {
    console.log(this.$route.params);
  },
  data() {
    return {
      siri: "시리,,,넌 너무 말이 많아,,",
      siwoo: "가정일찐 시우,,,,"
    };
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
