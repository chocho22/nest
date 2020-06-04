<template>
  <div
    class="q-px-md q-pb-md q-mx-md q-mb-md"
    style="width: 100%; height: 100%;"
  >
    <div class="q-ma-sm" style="width: 100%; height: 10%;">
      <h5>경 * 시리시우 팬클럽 가입 * 축</h5>
    </div>
    <div class="q-pa-sm q-ma-md" style="width: 80%; height: 75%;">
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        이름
        <q-input
          v-model="mbName"
          ref="mbName"
          placeholder="이름을 입력해주세요."
        ></q-input>
      </div>
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        ID
        <q-input
          v-model="mbId"
          ref="mbId"
          placeholder="ID를 입력해주세요."
          @blur="idCheck()"
        ></q-input>
        <span class="text-red" v-show="!isIdCheck"
          >이미 사용중인 ID입니다.</span
        >
        <span class="text-blue" v-show="isIdCheck"
          >사용할 수 있는 ID입니다.</span
        >
      </div>
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        비밀번호
        <q-input
          type="password"
          v-model="mbPwd"
          ref="mbPwd"
          placeholder="비밀번호를 입력해주세요."
        ></q-input>
      </div>
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        비밀번호 확인
        <q-input
          type="password"
          v-model="mbPwd2"
          ref="mbPwd2"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          @keyup="pwdCheck()"
        ></q-input>
        <span class="text-red" v-show="!isPwdMatch"
          >비밀번호가 일치하지 않습니다.</span
        >
        <span class="text-blue" v-show="isPwdMatch"
          >비밀번호가 일치합니다.</span
        >
      </div>
      <div class="q-pa-sm float-left vertical-bottom" style="width: 100%;">
        닉네임
        <q-input
          v-model="mbNick"
          ref="mbNick"
          placeholder="닉네임을 입력해주세요."
          @blur="nickCheck()"
        ></q-input>
        <span class="text-red" v-show="!isNickCheck"
          >이미 사용중인 닉네임입니다.</span
        >
        <span class="text-blue" v-show="isNickCheck"
          >사용할 수 있는 닉네임입니다.</span
        >
      </div>
    </div>
    <div style>
      <q-btn
        color="secondary"
        label="JOIN"
        @click="memberJoin()"
        class="q-ma-md q-mt-md float-right"
      ></q-btn>
      <q-btn
        color="primary"
        label="MAIN"
        class="q-ma-md q-mt-md float-left"
        @click="goMain()"
      ></q-btn>
    </div>
  </div>
</template>

<script>
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
      mbNick: "",
      isPwdMatch: false,
      isIdCheck: false,
      isNickCheck: false
    };
  },

  methods: {
    // vue 게시판 만들기 예제
    // https://codesandbox.io/s/3v0m1?file=/src/components/board/BoardCreate.vue
    memberJoin() {
      console.log("이제 회원가입을 해보자");

      if (!this.mbName) {
        alert("이름을 입력해주세요.");
        this.$refs.mbName.focus();
        return false;
      }
      if (!this.mbId) {
        alert("ID를 입력해주세요.");
        this.$refs.mbId.focus();
        return false;
      }
      if (!this.mbPwd) {
        alert("비밀번호를 입력해주세요.");
        this.$refs.mbPwd.focus();
        return false;
      }
      if (!this.mbPwd2) {
        alert("비밀번호를 다시 입력해주세요.");
        this.$refs.mbPwd2.focus();
        return false;
      }
      if (!this.mbNick) {
        alert("닉네임을 입력해주세요.");
        this.$refs.mbNick.focus();
        return false;
      }
      if (!this.isPwdMatch) {
        alert("비밀번호가 일치하는지 확인해주세요.");
        this.$refs.mbPwd.focus();
        return false;
      }
      if (!this.isIdCheck) {
        alert("사용할 수 있는 ID인지 확인해주세요.");
        this.$refs.mbPwd.focus();
        return false;
      }
      if (!this.isNickCheck) {
        alert("사용할 수 있는 닉네임인지 확인해주세요.");
        this.$refs.mbNick.focus();
        return false;
      }

      const datas = {
        mbName: this.mbName,
        mbId: this.mbId,
        mbPwd: this.mbPwd,
        mbNick: this.mbNick
      };
      this.$axios
        .post("http://localhost:8083/member/join", datas)
        .then(response => {
          console.log("success!! ", response);
          if (response.data.success === "Y") {
            alert("완료!!");
            // this.$router.go("/about");
            this.goMain();
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
    },

    pwdCheck() {
      if (this.mbPwd && this.mbPwd2) {
        if (this.mbPwd !== this.mbPwd2) {
          this.isPwdMatch = false;
        } else {
          this.isPwdMatch = true;
        }
      }
    },

    idCheck() {
      this.isIdCheck = false;
      const datas = {
        params: {
          mbId: this.mbId
        }
      };
      this.duplChk(datas);
    },

    nickCheck() {
      this.isNickCheck = false;
      const datas = {
        params: {
          mbNick: this.mbNick
        }
      };
      this.duplChk(datas);
      console.log(this.isNickCheck);
    },

    duplChk(obj) {
      this.$axios
        .get("http://localhost:8083/member/duplChk", obj)
        .then(response => {
          if (response.data.success === "Y") {
            if (obj.params.mbId) {
              this.isIdCheck = true;
            } else if (obj.params.mbNick) {
              this.isNickCheck = true;
            }
          }
        })
        .catch(e => {
          console.log("error ::: ", e);
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
