<template>
  <div class="q-pa-md q-ma-xl">
    <q-table title="Diary" :data="data" :columns="columns" row-key="name" class="q-table--flat" />
    <q-btn color="secondary" label="POST" class="q-ma-auto q-mt-md float-right" to="/write"></q-btn>
    <!-- <div class="q-gutter-md">
      <q-date v-model="date" :events="eventsFn" />
    </div>-->
    <router-view></router-view>
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
      date: "2020/05/21"
    };
  },

  methods: {
    // eventsFn(date) {
    //   const parts = date.split("/");
    //   return parts[2] % 2 === 0;
    // }
  }
};
</script>
