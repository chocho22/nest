<template>
  <div>
    <!-- <div style="float: right;">
      <h3>Diary</h3>
      <q-breadcrumbs></q-breadcrumbs>
    </div>-->
    <div class="q-pa-md q-ma-xl">
      <!-- <q-page-container>
        <q-page>{{ result }}</q-page>
        <q-markup-table></q-markup-table>
      </q-page-container>-->
      <div>
        <q-card flat class="my-card">
          <q-card-section>
            <div class="text-h4">{{ result.bdTitle }}</div>
            <div class="text-h6">by {{ result.mbNick }}</div>
            <div class="text-subtitle3 float-right">{{ result.bdRegDt }}</div>
          </q-card-section>

          <q-card-section v-html="result.bdContent"></q-card-section>

          <q-card-section>
            <div class="text-subtitle2">Comments</div>
          </q-card-section>
          <q-separator />

          <q-card-section>여기에 댓글을 보여줄 것입니다.</q-card-section>

          <q-separator />

          <q-card-section class="q-pa-md" style="width: 100%; height: 100%;">
            <div class="float-left vertical-bottom q-pa-lg" style="width: 10%;">
              유저이름과
              <br />썸네일
              <br />입네다
            </div>
            <q-input
              type="textarea"
              class="float-left vertical-bottom"
              style="width: 75%;"
              v-model="cmtContent"
              placeholder="댓글을 입력해 주세요."
            ></q-input>
            <q-btn class="float-left q-pa-lg vertical-bottom" flat label="REPLY"></q-btn>
          </q-card-section>
        </q-card>
        <div style="width: 100%;">
          <q-btn class="float-right q-ma-lg primary" label="LIST" @click="$router.go(-1)"></q-btn>
          <q-btn class="float-right q-ma-lg" label="MODIFY" to="/write"></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PageIndex",
  created() {
    console.log("this.$route.params.bdNum ::: " + this.$route.params.bdNum);
    // this.bdNum = this.$route.params.name;
    this.result = this.getView(this.$route.params.bdNum);
    console.log("this.result ::: " + this.result);
  },
  mounted() {},

  data() {
    return {
      result: null,
      cmtContent: "",
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
          field: "bdTitle",
          sortable: true
        },
        {
          name: "Writer",
          label: "Writer",
          field: "bdWriter",
          sortable: true
        },
        {
          name: "regDate",
          label: "Date",
          field: "bdregDt"
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
      ]
    };
  },

  methods: {
    // eventsFn(date) {
    //   const parts = date.split("/");
    //   return parts[2] % 2 === 0;
    // }
    getView(boardNum) {
      axios
        .get("http://localhost:8083/board/view/" + boardNum)
        .then(response => {
          console.log("response :::: ", response);
          console.log("response.data :::: ", response.data);
          this.result = response.data;
        })
        .catch(e => {
          console.log("error :: ", e);
        });
    }
  }
};
</script>
