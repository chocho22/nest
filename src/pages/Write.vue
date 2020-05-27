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
      <q-btn color="primary" label="LIST" class="q-ma-lg q-mt-xl float-left"></q-btn>
      <q-btn label="CANCEL" class="q-ma-lg q-mt-xl float-left"></q-btn>
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
      bdType: "",
      bdTitle: "",
      bdContent: "",
      mbId: "",
      mbNick: "",
      mbIp: "",
      bdRegDt: null,
      bdUdtDt: null,
      columns: [
        {
          name: "idx",
          required: true,
          label: "No.",
          align: "left",
          field: row => row.idx,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "Title",
          align: "center",
          label: "Title",
          field: "Title",
          sortable: true
        },
        {
          name: "Writer",
          label: "Writer",
          field: "Writer",
          sortable: true
        },
        {
          name: "regDate",
          label: "Date",
          field: "regDate"
        },
        {
          name: "view",
          label: "view",
          field: "view"
        },
        {
          name: "like",
          label: "like",
          field: "like"
        }
      ],
      data: [
        {
          idx: 12,
          Title: "근황!!",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 0,
          like: 1
        },
        {
          idx: 11,
          Title: "잘 잔다~~~",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 0,
          like: 0
        },
        {
          idx: 10,
          Title: "ㅎㅎㅎ귀요미",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 1,
          like: 0
        },
        {
          idx: 9,
          Title: "시우의 패션쇼",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 9,
          like: 1
        },
        {
          idx: 8,
          Title: "자세 뭐야?",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 11,
          like: 2
        },
        {
          idx: 7,
          Title: "괜찮아~~!",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 6,
          like: 0
        },
        {
          idx: 6,
          Title: "피곤해?",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 13,
          like: 1
        },
        {
          idx: 5,
          Title: "발바닥 맞대고있는 사진 올린다~~",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 21,
          like: 2
        },
        {
          idx: 4,
          Title: "애기들 자는모습",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 19,
          like: 1
        },
        {
          idx: 3,
          Title: "시우는 너무 귀여워!!",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 27,
          like: 3
        },
        {
          idx: 2,
          Title: "우리시리~~~",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 39,
          like: 6
        },
        {
          idx: 1,
          Title: "첫 게시글!!",
          Writer: "cho",
          regDate: "2020-05-20",
          view: 42,
          like: 11
        }
      ],
      date: "2020/05/21",
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
    // eventsFn(date) {
    //   const parts = date.split("/");
    //   return parts[2] % 2 === 0;
    // }

    // vue 게시판 만들기 예제
    // https://codesandbox.io/s/3v0m1?file=/src/components/board/BoardCreate.vue
    posting() {
      console.log("이제 포스팅을 해보자");
      axios
        .post("/api/board/add", {
          bdType: this.bdType,
          bdTitle: this.bdTitle,
          bdContent: this.bdContent,
          mbId: this.mbId,
          mbNick: this.mbNick,
          mbIp: this.mbIp,
          bdRegDt: this.bdRegDt,
          bdUdtDt: this.bdUdtDt
        })
        .then(response => {
          console.warn(response);
          this.result = response.data;
        })
        .catch(ex => {
          console.warn("error : ", ex);
        });
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
  }
};
</script>

<style lang="stylus">
q-select {
  width: 200px;
}
</style>
