<template>
  <div class="q-px-md q-pb-md q-mx-md q-mb-md">
    <div class="q-pa-md q-ma-md q-mb-xl" style="width: 100%;">
      <div class="float-left vertical-bottom" style="width: 20%;">
        <q-select v-model="bdType" :options="options" label="board type"></q-select>
      </div>
      <div class="float-left vertical-bottom" style="width: 80%;">
        <q-input v-model="bdTitle" placeholder="제목을 입력해주세요."></q-input>
      </div>
    </div>
    <div class="quill-editor q-pa-md q-ma-md" style="width: 100%;">
      <quill-editor
        v-model="bdContent"
        :content="bdContent"
        :options="editorOption"
        @change="onEditorChange($event)"
        style="
            width: 100%;
            height: 350px;"
      />
    </div>
    <div class="q-pa-md q-ma-md" style="width: 100%;">
      <q-btn color="secondary" label="WRITE" @click="posting()" class="q-ma-lg q-mt-xl float-right"></q-btn>
      <q-btn
        color="primary"
        label="LIST"
        class="q-ma-lg q-mt-xl float-left"
        @click="$router.go(-1)"
      ></q-btn>
      <q-btn label="CANCEL" class="q-ma-lg q-mt-xl float-left" @click="$router.go(-1)"></q-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import "quill/dist/quill.core.css"; // import styles
import "quill/dist/quill.snow.css"; // for snow theme
import "quill/dist/quill.bubble.css"; // for bubble theme

import { quillEditor } from "vue-quill-editor";

export default {
  name: "PageIndex",
  components: { quillEditor },
  created() {
    console.log(this.$route.params);
  },
  data() {
    return {
      editorOption: {
        // Some Quill options...
      },

      bdType: "",
      bdTitle: "",
      bdContent: "",
      mbId: "",
      mbNick: "",
      bdIp: "",
      bdRegDt: null,
      bdUdtDt: null,
      options: [
        {
          label: "diary",
          value: "1"
        },
        {
          label: "free board",
          value: "2"
        }
      ],
      model: null
    };
  },

  methods: {
    onEditorBlur(quill) {
      // console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      // console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      // console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      // console.log("editor change!", quill, html, text);
      this.content = html;
    },

    // vue 게시판 만들기 예제
    // https://codesandbox.io/s/3v0m1?file=/src/components/board/BoardCreate.vue
    posting() {
      console.log("이제 포스팅을 해보자");
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
    }
  }
};
</script>

<style lang="stylus">
q-select {
  width: 200px;
}
</style>
