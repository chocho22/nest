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
          :data="result"
          :columns="columns"
          row-key="name"
          class="q-table--flat"
          no-data-label="글이 없어요~ 글 주세요~"
          @row-click="onRowClick()"
        />
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
import axios from "axios";

export default {
  name: "PageIndex",
  created() {
    // console.log(this.$route.params);
    this.result = this.getBoardList();
    console.log("this.result ::: ", this.result);
  },
  data() {
    return {
      result: null,
      length: null,
      srchType: "",
      srchTp: "",
      srchStDate: "",
      srchEndDate: "",
      stDate: "",
      endDate: "",
      columns: [
        {
          name: "rownum",
          align: "left",
          label: "No.",
          field: "rownum",
          sortable: true
        },
        {
          name: "bdTitle",
          align: "center",
          label: "Title",
          field: "bdTitle",
          sortable: true
        },
        {
          name: "mbNick",
          label: "Writer",
          field: "mbNick",
          sortable: true
        },
        {
          name: "bdRegDt",
          label: "Date",
          field: "bdRegDt"
        },
        {
          name: "bdView",
          label: "view",
          field: "bdView"
        },
        {
          name: "bdLike",
          label: "like",
          field: "bdLike"
        }
      ],
      // date: "2020/05/26",
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
    getBoardList() {
      console.log("getBoardList로는 들어왔나요??????");
      axios
        .get("http://localhost:8083/board/list")
        .then(response => {
          console.log(response);
          this.result = response.data;
          this.length = response.data.length;
          console.log("this.length :: ", this.length);
        })
        .catch(e => {
          console.log("error :: " + e);
        });
    },

    onRowClick() {
      console.log("view는 지금 하고있어");
      console.log("this :: ", this);
      console.log("this.result.bdNum :: ", this.result.bdNum);
      console.log("this.result :: ", this.result);
      this.$router.push({
        path: `/board/view/${this.result.bdNum}`
      });
    }
  }
};
</script>
