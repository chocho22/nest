<template>
  <div>
    <!-- <div style="float: right;">
      <h3>Diary</h3>
      <q-breadcrumbs></q-breadcrumbs>
    </div>-->
    <div class="q-pa-md q-ma-xl">
      <div>
        <q-table
          title="Diary"
          :data="data"
          :columns="columns"
          row-key="name"
          class="q-table--flat"
        />
        <q-card>
          <q-card-section>안녕하세욘?</q-card-section>
          <q-card-section>안녕하세욘?2</q-card-section>
          <q-card-section>안녕하세욘?3</q-card-section>
        </q-card>
      </div>
      <div style="width: 100%;">
        <div class="float-left vertical-bottom">
          <q-select style="width: 80px;" v-model="srchTp" :options="options" label="search type"></q-select>
        </div>
        <div class="float-left vertical-bottom">
          <q-input v-model="srchType" style="width: 200px;"></q-input>
        </div>
        <div class="q-pa-md float-left vertical-bottom" style="max-width: 600px;">
          <div class="float-left vertical-bottom">
            <q-input
              filled
              v-model="stDate"
              mask="date"
              :rules="['date']"
              class="float-left vertical-bottom"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="srchStDate" @input="() => $refs.qDateProxy.hide()" today-btn />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>~
          </div>
          <div class="float-left vertical-bottom">
            <q-input
              filled
              v-model="endDate"
              mask="date"
              :rules="['date']"
              class="float-left vertical-bottom"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="srchEndDate" @input="() => $refs.qDateProxy.hide()" today-btn />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div class="q-mt-lg q-ml-xl float-left vertical-bottom">
          <q-btn label="SEARCH"></q-btn>
        </div>
      </div>
      <q-btn color="secondary" label="POST" class="q-ma-auto q-mt-lg float-right" to="/write"></q-btn>
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
      srchType: "",
      srchTp: "",
      srchStDate: "",
      srchEndDate: "",
      stDate: "",
      endDate: "",
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
  }
};
</script>
