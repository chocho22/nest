<template>
  <div>
    <!-- <div style="float: right;">
      <h3>Diary</h3>
      <q-breadcrumbs></q-breadcrumbs>
    </div>-->
    <div class="q-pa-md q-ma-xl" style="height: 650px;">
      <div>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">게시글 제목입니다.</div>
            <div class="text-subtitle2">by cho (게시글 작성자입니다.)</div>
            <div class="text-subtitle3 float-right">2020-05-26 10:21</div>
          </q-card-section>

          <q-card-section>
            여기는 내용이 들어올 것입니다 ㅎㅎ<br/>
            시리와 시우에 관한 내용이 주로 들어올 예정입니다 ㅎㅎ
            여기는 내용이 들어올 것입니다 ㅎㅎ<br/>
            시리와 시우에 관한 내용이 주로 들어올 예정입니다 ㅎㅎ
            여기는 내용이 들어올 것입니다 ㅎㅎ<br/>
            시리와 시우에 관한 내용이 주로 들어올 예정입니다 ㅎㅎ
            여기는 내용이 들어올 것입니다 ㅎㅎ<br/>
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle2">
              Comments
            </div>
          </q-card-section>
          <q-separator />

          <q-card-section>
            여기에 댓글을 보여줄 것입니다.
          </q-card-section>

          <q-separator />
          <q-card-section class="q-pa-xl" style="width: 100%;">
            <div class="float-left q-pt-none vertical-bottom" style="width: 80%;">
              <q-input v-model="cmtContent" placeholder="댓글을 입력해 주세요."></q-input>
            </div>
            <div class="float-left q-pt-none vertical-bottom">
              <q-btn flat label="REPLY"></q-btn>
            </div>
          </q-card-section>
          <!-- <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions> -->
        </q-card>

      </div>
      <div>
        <q-btn color="primary" label="LIST" class="q-ma-auto q-mt-lg float-left" @click="goList()"></q-btn>
        <q-btn color="secondary" label="MODIFY" class="q-ma-auto q-mt-lg float-right" to="/write"></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  created() {
    console.log(this.$route.params);
  },
  data() {
    return {
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
      ],
      data: [
        {
          idx: 12,
          Title: "근황!!",
          Writer: "cho",
          regDate: "2020-05-21",
          view: 0,
          like: 1
        }
      ],
      date: "2020/05/26",
      options: [
        {
          label: "id",
          value: "mbId"
        },
        {
          label: "nick",
          value: "mbNick"
        },
        {
          label: "title",
          value: "bdTitle"
        },
        {
          label: "title + content",
          value: "bdTitle,bdContent"
        }
      ]
    };
  },

  methods: {
    // eventsFn(date) {
    //   const parts = date.split("/");
    //   return parts[2] % 2 === 0;
    // }
    goList() {
      console.log("리스트 페이지로 갈것이야");
    }
  }
};
</script>
