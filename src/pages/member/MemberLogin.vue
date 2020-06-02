<template>
  <div class="q-px-md q-pb-md q-mx-md q-mb-md">
    <div class="q-pa-md q-ma-md q-mb-xl" style="width: 100%;">
      <div class="float-left vertical-bottom" style="width: 100%;">
        <q-input v-model="mbId" placeholder="ID를 입력해주세요."></q-input>
        <q-input type="password" v-model="mbPwd" placeholder="비밀번호를 입력해주세요."></q-input>
      </div>
    </div>
    <div class="q-pa-md q-ma-md" style="width: 100%;">
      <q-btn
        color="secondary"
        label="LOGIN"
        @click="memberLogin()"
        class="q-ma-lg q-mt-xl float-right"
      ></q-btn>
      <q-btn color="primary" label="MAIN" class="q-ma-lg q-mt-xl float-left" @click="goMain()"></q-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PageIndex",
  components: {},
  created() {
    console.log(this.$route.params);
  },
  data() {
    return {
      mbId: "",
      mbPwd: ""
    };
  },

  methods: {
    // vue 게시판 만들기 예제
    // https://codesandbox.io/s/3v0m1?file=/src/components/board/BoardCreate.vue
    memberLogin() {
      console.log("이제 회원가입을 해보자");
      const datas = {
        bdType: this.bdType.value,
        bdTitle: this.bdTitle,
        bdContent: this.bdContent,
        mbId: this.mbId,
        mbNick: this.mbNick,
        bdIp: this.bdIp,
        bdRegDt: this.bdRegDt,
        bdUdtDt: this.bdUdtDt
      };
      axios
        .post("http://localhost:8083/board/add", datas)
        .then(response => {
          console.log("success!! ", response);
          if (response.data.success === "Y") {
            alert("완료!!");
            this.$router.go(-1);
          } else {
            alert("못함!!ㅠㅠㅠ");
          }
        })
        .catch(e => {
          alert("axios 실패!!");
          console.log(e);
        });
    },
    goMain() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style lang="stylus">
q-select {
  width: 200px;
}
</style>
