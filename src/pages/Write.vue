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
      <q-btn color="primary" label="LIST" class="q-ma-lg q-mt-xl float-left" to="/diary"></q-btn>
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
      console.log("$data :: ", this.$data);
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
      axios({
        url: "http://localhost:8083/board/add",
        method: "post",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        data: JSON.stringify(datas),
        success: res => {
          if (res.result === "Y") {
            alert("완료!!");
            console.log(res);
          } else {
            alert("못함!!ㅠㅠㅠ");
          }
        },
        error: e => {
          alert("axios 실패!!");
          console.log(e);
        }
      });
      // axios
      //   .post(
      //     "http://localhost:8083/board/add",
      //     // this.$data

      //     // 이게 parameter가 되는건가...?? 그래서 get으로 가는건가...?????
      //     {
      //       bdType: this.bdType.value,
      //       bdTitle: this.bdTitle,
      //       bdContent: this.bdContent,
      //       mbId: this.mbId,
      //       mbNick: this.mbNick,
      //       bdIp: this.bdIp,
      //       bdRegDt: this.bdRegDt,
      //       bdUdtDt: this.bdUdtDt
      //     },
      //      { headers: { 'Content-Type': 'application/json' } }
      //   )
      //   .then(response => {
      //     alert("완료!");
      //     console.warn(response);
      //     this.result = response.data;
      //   })
      //   .catch(ex => {
      //     console.warn("error : ", ex);
      //   });
      // const contentItems = data.Content.sort((a, b) => {
      //   return b.content_id - a.content_id;
      // });
      // const content_id = contentItems[0].content_id + 1; // 마지막 데이터의 id + 1
      // data.Content.push({
      //   content_id: content_id,
      //   user_id: this.user_id,
      //   title: this.subject,
      //   context: this.context,
      //   created_at: this.created_at,
      //   updated_at: this.updated_at
      // });
      // this.$router.push({
      //   path: "/"
      // });
    }
    // posting() {
    //   if (this.$route.params.seq) {
    //     axios
    //       .put(this.baseUrl + "/board/modify", this.$data)
    //       .then(response => {
    //         console.log(response);
    //         this.$router.push("/board/view/" + this.$route.params.seq);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   } else {
    //     this.$data.regDt = this.getNowDate();
    //     this.$data.uptDt = this.getNowDate();
    //     axios
    //       .post(this.baseUrl + "/board/add", this.$data)
    //       .then(response => {
    //         console.log(response);
    //         this.$router.push("/board");
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   }
    // },
    // getNowDate() {
    //   var nowDate = new Date();
    //   var year = nowDate.getFullYear().toString();
    //   var month = (nowDate.getMonth() + 1).toString();
    //   var day = nowDate.getDate().toString();
    //   return (
    //     year +
    //     "-" +
    //     (month[1] ? month : "0" + month[0]) +
    //     "-" +
    //     (day[1] ? day : "0" + day[0])
    //   );
    // }
  }
};
</script>

<style lang="stylus">
q-select {
  width: 200px;
}
</style>
