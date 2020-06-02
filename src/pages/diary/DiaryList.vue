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
          @row-click="onRowClick"
        />
      </div>
      <div class="search" style="width: 100%;">
        <div class="float-left vertical-bottom" style="width: 10%;">
          <q-select
            style="min-width: 80px;"
            v-model="srchTp"
            :options="options"
            label="search type"
          ></q-select>
        </div>
        <div class="float-left vertical-bottom" style="width: 20%;">
          <q-input v-model="srchType"></q-input>
        </div>
        <div class="q-pa-md float-left vertical-bottom" style="width: 43%;">
          <div class="float-left vertical-bottom">
            <!-- TODO 얘 크기좀 줄이고싶은데 방법이 없나... -->
            <q-input
              filled
              v-model="srchStDate"
              mask="date"
              :rules="['srchStDate']"
              class="float-left vertical-bottom"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <!-- TODO 얘는 왜 선택을 해도 안닫힐까? end date는 닫히는데... -->
                    <q-date v-model="srchStDate" @input="() => $refs.qDateProxy.hide()" today-btn />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>~
          </div>
          <div class="float-left vertical-bottom">
            <q-input
              filled
              v-model="srchEndDate"
              mask="date"
              :rules="['srchEndDate']"
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
        <div class="q-mt-lg float-left vertical-bottom">
          <q-btn label="SEARCH"></q-btn>
        </div>
      </div>
      <q-btn color="secondary" label="POST" class="q-ma-auto q-mt-lg float-right" to="/write"></q-btn>
      <q-btn
        color="secondary"
        label="MODIFY3"
        class="q-ma-auto q-mt-lg float-right"
        @clicik="goModifyPage()"
      ></q-btn>
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

    onRowClick(evt, row) {
      this.$router.push({
        path: `/view/${row.bdNum}`
      });
      console.log(this.$router);
    },
    goModifyPage() {
      this.$router.go("/about");
      // console.log(this.$router);

      // this.$router.push({
      // name: "modify",
      // params: { bdNum: 14 }
      // path: `/modify/14`
      // path: `/about`
      // next() {}
      // });
      // console.log(this.$router);
    }
  }
};
</script>
