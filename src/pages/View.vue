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
        <q-card flat class="my-card" v-if="result">
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
          <q-btn class="float-right q-ma-lg" label="MODIFY" @click="goModify(result.bdNum)"></q-btn>
          <!-- <q-btn class="float-right q-ma-lg" label="MODIFY2" @click="goModify2(result.bdNum)"></q-btn> -->
          <q-btn class="float-right q-ma-lg" label="DELETE" @click="deleteBoard(result.bdNum)"></q-btn>
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
    this.result = this.getView(this.$route.params.bdNum);
  },
  mounted() {},

  data() {
    return {
      result: null,
      // bdTitle: null,
      // mbNick: null,
      // bdRegDt: null,
      // bdContent: null,
      cmtContent: null
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
          // console.log("response :::: ", response);
          // console.log("response.data :::: ", response.data);
          this.result = response.data;
        })
        .catch(e => {
          console.log("error :: ", e);
        });
    },

    goModify(bdNum) {
      console.log("bdNum !!! ", bdNum);
      console.log(this.$router);

      this.$router.push({
        name: "modify",
        params: { bdNum: bdNum }
        // path: `/`
        // path: `/about`
        // next() {}
      });
      console.log(this.$router);
    },

    // goModify2(bdNum) {
    //   console.log("bdNum !!! ", bdNum);
    //   console.log(this.$router);
    //   this.$router.push({
    //     // path: `/modify/${bdNum}`
    //     path: `/`
    //   });
    //   console.log(this.$router);
    // },

    deleteBoard(boardNum) {
      console.log("boardNum :: ", boardNum);
      axios
        .post("http://localhost:8083/board/delete/" + boardNum)
        .then(response => {
          console.log("response :: ", response);
          if (response.data.success === "Y") {
            alert("삭제 완료!!");
            this.$router.go(-1);
          } else {
            alert("삭제 실패...");
          }
        })
        .catch(e => {
          console.log("error !!! :: ", e);
        });
    }
  }
};
</script>
