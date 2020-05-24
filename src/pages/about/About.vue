<template>
  <div>
    <div class="q-pa-xl q-pb-md float-left" style="width:400px;">
      <q-card class="my-card">
        <q-img src="~assets/cat/시리.jpg" basic>
          <div class="absolute-bottom text-h6">시리</div>
        </q-img>

        <q-card-section>
          <ul>
            <li v-for="siri in siris" :key="siri.cmt">{{ siri.cmt }}</li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-xl q-pb-md" style="width:400px; display:inline-block;">
      <q-card class="my-card">
        <q-img src="~assets/cat/시우.jpg" basic>
          <div class="absolute-bottom text-h6">시우</div>
        </q-img>

        <q-card-section>
          <ul>
            <li v-for="siwoo in siwoos" :key="siwoo.cmt">{{ siwoo.cmt }}</li>
          </ul>
        </q-card-section>
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
      siris: [
        { cmt: "시리,,,넌 너무 말이 많아,," },
        { cmt: "6살 추정" },
        { cmt: "남(무성)" },
        { cmt: "발라당이 취미" },
        { cmt: "엄마를 좋아함" }
      ],
      siwoos: [
        { cmt: "가정일찐 시우,,,," },
        { cmt: "2살 추정" },
        { cmt: "여(무성)" },
        { cmt: "파괴가 취미.." },
        { cmt: "고독한 상여자.." }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
