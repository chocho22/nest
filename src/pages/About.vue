<template>
  <div>
    <div class="q-pa-xl q-pb-md q-mx-auto float-left" style="width:500px;">
      <q-card clickable class="my-card">
        <q-img src="~assets/cat/시리.jpg" style="height: 140px; max-width: 150px" basic>
          <div class="absolute-bottom text-h6">시리</div>
        </q-img>

        <q-card-section>{{ siri }}</q-card-section>
      </q-card>
    </div>
    <div class="q-pa-xl q-pb-md q-mx-auto" style="width:500px; display:inline-block;">
      <q-card clickable class="my-card">
        <q-img style="height: 140px; max-width: 150px" src="~assets/cat/시우.jpg" basic>
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

//https://webclub.tistory.com/227
body {
  margin: 100px;
}

.container {
  position: relative;
  margin: 10px 0 20px 0;
  perspective: 1000;
}

.card {
  width: 200px;
  height: 50px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
}

.face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  line-height: 50px;
  text-align: center;
  backface-visibility: hidden;
}

.front {
  background: red;
}

.back {
  transform: rotateY(180deg);
  background: green;
/*   backface-visibility:hidden; */
}

.container:hover .card {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.container:hover .front {
/*   z-index: 0; */
}

</style>
