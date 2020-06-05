<template>
  <div style="overflow: auto;">
    <!-- <div style="float: right;">
      <h3>Diary</h3>
      <q-breadcrumbs></q-breadcrumbs>
    </div>-->
    <div class="q-pa-md q-ma-xl">
      <div>
        <q-card flat class="my-card" v-if="result">
          <q-card-section>
            <div class="text-h4">{{ result.bdTitle }}</div>
            <div class="text-h6">by {{ result.mbNick }}</div>
            <div class="text-subtitle3 float-right">{{ result.bdRegDt }}</div>
          </q-card-section>

          <q-card-section v-html="result.bdContent"></q-card-section>

          <q-card-section>
            <div>
              <span class="text-subtitle2">Comments</span>
              <div
                class="float-right q-ma-auto q-px-lg"
                style="display: inline;"
              >
                <q-btn
                  class="q-mr-xl"
                  style="bottom: 10px;"
                  color="secondary"
                  icon="thumb_up_alt"
                  @click="cntBdLike(result.bdNum)"
                  >LIKE {{ result.bdLike }}</q-btn
                >
                <span class="q-ml-lg q-mb-lg">조회 {{ result.bdView }}</span>
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section>여기에 댓글을 보여줄 것입니다.</q-card-section>

          <q-separator />

          <q-card-section class="q-pa-md" style="width: 100%; height: 100%;">
            <div class="float-left vertical-bottom q-pa-lg" style="width: 10%;">
              유저이름과
              <br />썸네일 <br />입네다
            </div>
            <q-input
              type="textarea"
              class="float-left vertical-bottom"
              style="width: 75%;"
              v-model="cmtContent"
              placeholder="댓글을 입력해 주세요."
            ></q-input>
            <q-btn
              class="float-left q-pa-lg vertical-bottom"
              flat
              label="REPLY"
            ></q-btn>
          </q-card-section>
        </q-card>
        <div style="width: 100%;">
          <q-btn
            class="float-right q-ma-lg primary"
            label="LIST"
            @click="goToList(result.bdType)"
          ></q-btn>
          <q-btn
            class="float-right q-ma-lg"
            label="DELETE"
            @click="deleteBoard(result.bdNum)"
          ></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  created() {
    this.result = this.getView(this.$route.params.bdNum);
    // this.bdLike = this.result.bdLike;
  },
  mounted() {},

  data() {
    return {
      result: null,
      // bdLike: null,
      // bdTitle: null,
      // mbNick: null,
      // bdRegDt: null,
      // bdContent: null,
      cmtContent: null,
      clickBdLike: false
    };
  },

  methods: {
    // eventsFn(date) {
    //   const parts = date.split("/");
    //   return parts[2] % 2 === 0;
    // }
    getView(boardNum) {
      this.$axios
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

    goToList(bdType) {
      console.log("bdType @@@ ", bdType);
      let listType = "";
      if (bdType === "1") {
        listType = "/diary";
      } else {
        listType = "/free";
      }
      this.$router.push(listType).catch(err => console.log(err));
    },

    deleteBoard(boardNum) {
      console.log("boardNum :: ", boardNum);
      this.$axios
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
    },
    cntBdLike(bdNum) {
      if (this.clickBdLike) {
        alert("이미 추천하였습니다.");
        return false;
      } else {
        this.clickBdLike = true;
        this.result.bdLike = parseInt(this.result.bdLike) + 1;
        this.$axios
          .post("http://localhost:8083/board/cntLike/" + bdNum)
          .then(response => {
            if (response.data.success === "Y") {
              console.log("response.data.success@@@ " + response.data.success);
            } else {
              console.log("response.data.success@@@ " + response.data.success);
            }
          })
          .catch(e => {
            console.log("error::: " + e);
          });
      }
    }
  }
};
</script>
