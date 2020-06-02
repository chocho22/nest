<template>
  <div class="q-px-md q-pb-md q-mx-md q-mb-md" style="width: 100%; height: 100%;">
    <div class="q-ma-sm" style="width: 100%;">
      <h5>경 * 시리시우 팬클럽 가입 * 축</h5>
    </div>
    <div class="q-pa-sm q-ma-md" style="width: 80%; height: 75%;">
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        이름
        <q-input v-model="mbName" placeholder="이름을 입력해주세요."></q-input>
      </div>
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        <!-- TODO onkeyup으로 db id 중복 조회 -->
        ID
        <q-input v-model="mbId" placeholder="ID를 입력해주세요."></q-input>
        <span class="text-red" hidden>이미 사용중인 ID입니다.</span>
      </div>
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        비밀번호
        <q-input type="password" v-model="mbPwd" placeholder="비밀번호를 입력해주세요."></q-input>
      </div>
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        <!-- TODO onkeyup으로 비밀번호 일치여부 조회 -->
        비밀번호 확인
        <q-input type="password" v-model="mbPwd2" placeholder="비밀번호를 다시 한번 입력해주세요."></q-input>
        <span class="text-red" hidden>비밀번호가 일치하지 않습니다.</span>
      </div>
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        <!-- TODO onkeyup으로 db 닉네임 중복 조회 -->
        닉네임
        <q-input v-model="mbNick" placeholder="닉네임을 입력해주세요."></q-input>
        <span class="text-red" hidden>이미 사용중인 닉네임입니다.</span>
      </div>
    </div>
    <div style>
      <q-btn
        color="secondary"
        label="JOIN"
        @click="memberJoin()"
        class="q-ma-md q-mt-md float-right"
      ></q-btn>
      <q-btn color="primary" label="MAIN" class="q-ma-md q-mt-md float-left" @click="goMain()"></q-btn>
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
      mbName: "",
      mbId: "",
      mbPwd: "",
      mbPwd2: "",
      mbNick: ""
    };
  },

  methods: {
    // vue 게시판 만들기 예제
    // https://codesandbox.io/s/3v0m1?file=/src/components/board/BoardCreate.vue
    memberJoin() {
      console.log("이제 회원가입을 해보자");
      const datas = {
        mbName: this.mbName,
        mbId: this.mbId,
        mbPwd: this.mbPwd,
        mbNick: this.mbNick
      };
      axios
        .post("http://localhost:8083/member/join", datas)
        .then(response => {
          console.log("success!! ", response);
          if (response.data.success === "Y") {
            alert("완료!!");
            this.$router.go("/");
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
.q-input {
  width: 100%;
  margin: auto;
}
</style>
