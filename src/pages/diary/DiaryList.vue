<template>
  <div>
    <!-- <div style="float: right;">
      <h3>Diary</h3>
      <q-breadcrumbs></q-breadcrumbs>
    </div>-->
    <div class="q-pa-md q-ma-lg">
      <div style="width: 100%;">
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
      <!-- TODO 얘는 왜 높이가 0일까?? -->
      <div style="width: 100%;">
        <div class="float-left vertical-bottom" style="width: 100px;">
          <q-select
            style="width: 100px;"
            v-model="srchTp"
            :options="options"
            label="search type"
          ></q-select>
        </div>
        <div class="float-left vertical-bottom" style="width: 200px;">
          <q-input v-model="srchType"></q-input>
        </div>
        <div class="q-pa-md float-left vertical-bottom">
          <div class="float-left vertical-bottom">
            <q-input
              dense
              filled
              v-model="srchStDate"
              mask="date"
              :rules="['srchStDate']"
              class="float-left vertical-bottom"
              style="width: 140px;"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="startDate"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="srchStDate"
                      @input="() => $refs.startDate.hide()"
                      today-btn
                    />
                  </q-popup-proxy>
                </q-icon>
              </template> </q-input
            >~
          </div>
          <div class="float-left vertical-bottom">
            <q-input
              dense
              filled
              v-model="srchEndDate"
              mask="date"
              :rules="['srchEndDate']"
              class="float-left vertical-bottom"
              style="width: 140px;"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="endDate"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="srchEndDate"
                      @input="() => $refs.endDate.hide()"
                      today-btn
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div
          class="q-pa-md float-left vertical-bottom"
          style="display: inline-block;"
        >
          <q-btn class="q-mx-md" label="SEARCH"></q-btn>
          <q-btn
            class="q-mx-xl"
            color="secondary"
            label="POST"
            to="/write"
          ></q-btn>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PageIndex",
  created() {
    this.$nextTick(() => {
      console.log("refs::::::::", this.$refs.startDate);
    });
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
    cntBdView(bdNum) {
      this.$axios
        .post("http://localhost:8083/board/cntView/" + bdNum)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log("error::: ", e);
        });
    },

    onRowClick(evt, row) {
      this.cntBdView(row.bdNum);
      this.$router.push({
        path: `/view/${row.bdNum}`
      });
      console.log(this.$router);
    }
  }
};
</script>
