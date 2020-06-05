<template>
  <div class="q-pa-md q-ma-lg">
    <div>
      <q-table
        title="Shopping"
        :data="data"
        :columns="columns"
        row-key="name"
        class="q-table--flat"
      />
    </div>
    <div class="q-ma-md q-ml-lg">
      <div class="float-left vertical-bottom">
        <q-input v-model="srchType" style="width: 200px;"></q-input>
      </div>
      <div class="q-mt-lg q-ml-xl float-left vertical-bottom">
        <q-btn label="SEARCH"></q-btn>
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
      srchType: "",
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
          name: "Item",
          align: "center",
          label: "Item",
          field: "Item",
          sortable: true
        },
        {
          name: "Price",
          label: "Price",
          field: "Price",
          sortable: true
        },
        {
          name: "Shipping",
          label: "Shipping",
          field: "Shipping",
          sortable: true
        },
        {
          name: "Review",
          label: "Review",
          field: "Review",
          sortable: true
        },
        {
          name: "Shop",
          label: "Shop",
          field: "Shop",
          sortable: true
        }
      ],
      data: [
        {
          idx: 12,
          Item: "노즈워크",
          Price: "40,000원",
          Shipping: "무료배송",
          Review: "155건",
          Shop: "옥션"
        },
        {
          idx: 11,
          Item: "홀리스틱 사료",
          Price: "80,000원",
          Shipping: "무료배송",
          Review: "221건",
          Shop: "11번가"
        },
        {
          idx: 10,
          Item: "장난감",
          Price: "20,000원",
          Shipping: "2,500원",
          Review: "91건",
          Shop: "인터파크"
        },
        {
          idx: 9,
          Item: "화장실 모래",
          Price: "60,000원",
          Shipping: "무료배송",
          Review: "42건",
          Shop: "지마켓"
        },
        {
          idx: 8,
          Item: "정수기",
          Price: "99,000원",
          Shipping: "5,000원",
          Review: "228건",
          Shop: "옥션"
        },
        {
          idx: 7,
          Item: "노즈워크",
          Price: "40,000원",
          Shipping: "무료배송",
          Review: "155건",
          Shop: "옥션"
        },
        {
          idx: 6,
          Item: "노즈워크",
          Price: "40,000원",
          Shipping: "무료배송",
          Review: "155건",
          Shop: "옥션"
        },
        {
          idx: 5,
          Item: "노즈워크",
          Price: "40,000원",
          Shipping: "무료배송",
          Review: "155건",
          Shop: "옥션"
        },
        {
          idx: 4,
          Item: "노즈워크",
          Price: "40,000원",
          Shipping: "무료배송",
          Review: "155건",
          Shop: "옥션"
        },
        {
          idx: 3,
          Item: "노즈워크",
          Price: "40,000원",
          Shipping: "무료배송",
          Review: "155건",
          Shop: "옥션"
        },
        {
          idx: 2,
          Item: "노즈워크",
          Price: "40,000원",
          Shipping: "무료배송",
          Review: "155건",
          Shop: "옥션"
        },
        {
          idx: 1,
          Item: "노즈워크",
          Price: "40,000원",
          Shipping: "무료배송",
          Review: "155건",
          Shop: "옥션"
        }
      ],
      date: "2020/05/26"
    };
  }
};
</script>

<style lang="scss">
.background {
  width: 100%;
  height: 100%;
  // background-image: url("~assets/고양이.jpg");
}
</style>
