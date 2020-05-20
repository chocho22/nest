<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>Timeline heading</q-timeline-entry>

      <q-timeline-entry title="시리1" subtitle="February 22, 1986">
        <div>시리1</div>
      </q-timeline-entry>

      <q-timeline-entry title="시우1" subtitle="February 21, 1986" icon="delete">
        <div>시우1</div>
      </q-timeline-entry>

      <q-timeline-entry heading>May, 2020</q-timeline-entry>

      <q-timeline-entry
        title="시리2"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
      >
        <div>시리2</div>
      </q-timeline-entry>

      <q-timeline-entry title="시우2" subtitle="February 22, 1986">
        <div>시우2</div>
      </q-timeline-entry>

      <q-timeline-entry title="시우3" subtitle="February 22, 1986" color="orange" icon="done_all">
        <div>시우3</div>
      </q-timeline-entry>

      <q-timeline-entry title="시리3" subtitle="February 22, 1986">
        <div>시리3</div>
      </q-timeline-entry>

      <q-timeline-entry title="시우4" subtitle="February 22, 1986">
        <div>시우4</div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  created() {
    console.log(this.$route.params);
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
