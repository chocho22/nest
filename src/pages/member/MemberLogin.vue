<template>
  <div class="q-px-md q-pb-md q-mx-md q-mb-md">
    <div class="q-pa-md q-ma-md q-mb-xl" style="width: 100%;">
      <div class="float-left vertical-bottom" style="width: 100%;">
        <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
          ID
          <q-input v-model="mbId" placeholder="ID를 입력해주세요."></q-input>
        </div>

        <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
          비밀번호
          <q-input
            type="password"
            v-model="mbPwd"
            placeholder="비밀번호를 입력해주세요."
          ></q-input>
        </div>
      </div>
    </div>
    <div class="q-pa-md q-ma-md" style="width: 100%;">
      <q-btn
        color="secondary"
        label="LOGIN"
        @click="memberLogin()"
        class="q-ma-lg q-mt-xl float-right"
      ></q-btn>
      <q-btn
        color="primary"
        label="MAIN"
        class="q-ma-lg q-mt-xl float-left"
        @click="goMain()"
      ></q-btn>
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
      // isLogin: false
    };
  },

  methods: {
    // vue 게시판 만들기 예제
    // https://codesandbox.io/s/3v0m1?file=/src/components/board/BoardCreate.vue
    memberLogin() {
      console.log("이제 로그인을 해보자");

      if (!this.mbId) {
        alert("ID를 입력해주세요.");
        return false;
      }
      if (!this.mbPwd) {
        alert("비밀번호를 입력해주세요.");
        return false;
      }

      const datas = {
        mbId: this.mbId,
        mbPwd: this.mbPwd
      };
      axios
        .post("http://localhost:8083/member/login", datas)
        .then(response => {
          console.log("success!! ", response);
          if (response.data.success === "Y") {
            alert("로그인 성공!!");
            sessionStorage.setItem("mbNum", response.data.loginMember.mbNum);
            sessionStorage.setItem("mbId", response.data.loginMember.mbId);
            sessionStorage.setItem("mbNick", response.data.loginMember.mbNick);
            // this.isLogin = true;
            this.goMain();
          } else {
            alert("로그인 못함!!ㅠㅠㅠ");
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
