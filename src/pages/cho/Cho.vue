<template>
  <div style="display: flex; flex-flow: row nowwrap; justify-content: space-evenly;">
    <div class="q-pa-xl q-pb-md" style="width:600px;">
      <q-card class="my-card">
        <q-img src="~assets/cho.jpg" basic>
          <div class="absolute-bottom text-h6">cho</div>
        </q-img>

        <q-card-section>
          <ul>
            <li v-for="cho in chos" :key="cho.cmt">{{ cho.cmt }}</li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-xl q-pb-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-pa-md row justify-center">
            <div style="max-width: 600px;">
              <q-chat-message
                name="사용자3"
                stamp="7 minutes ago"
                :text="['안녕하세요??']"
                sent
                text-color="white"
                bg-color="primary"
              >
                <template v-slot:avatar>
                  <img
                    class="q-message-avatar q-message-avatar--sent"
                    src="https://cdn.quasar.dev/img/avatar4.jpg"
                  />
                </template>
              </q-chat-message>

              <q-chat-message name="cho" :text="['안녕하세요~^^ 시리 시우 귀엽지 않나요??']" bg-color="amber">
                <template v-slot:avatar>
                  <img class="q-message-avatar q-message-avatar--received" src="~assets/cho.jpg" />
                </template>

                <q-spinner-dots size="2rem" />
              </q-chat-message>
            </div>
            <q-input
              v-model="chatMsg"
              class="q-pb-sm"
              style="width: 90%;"
              placeholder="채팅 메세지를 입력해주세요."
            ></q-input>
          </div>
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
      chatMsg: "",
      chos: [
        { cmt: "블로그를 만들어보았어요" },
        { cmt: "3x살 추정" },
        { cmt: "여" },
        { cmt: "눕고싶어" },
        { cmt: "뭐가 그렇게 맛있었는지.. 인생 최고 몸무게 갱신" }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
