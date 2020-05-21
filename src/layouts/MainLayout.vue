<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated class="bg-cyan-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <!-- <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" /> -->
            <q-icon name="pets" />
          </q-avatar>블로그
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="300" :breakpoint="400">
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item clickable v-ripple to="/about">
            <q-item-section avatar>
              <q-icon name="pets" />
            </q-item-section>

            <q-item-section>about</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/diary">
            <q-item-section avatar>
              <q-icon name="photo_library" />
            </q-item-section>

            <q-item-section>diary</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/shop">
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>

            <q-item-section>shopping</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/free">
            <q-item-section avatar>
              <q-icon name="account_balance" />
            </q-item-section>

            <q-item-section>freeboard</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/cho">
            <q-item-section avatar>
              <q-icon name="emoji_people" />
            </q-item-section>

            <q-item-section>cho</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px;"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="~assets/cat/같이6.jpg" />
          </q-avatar>
          <div class="text-weight-bold">siri siwoo</div>
          <div>crisoberyl@naver.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <!-- <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" /> -->
            <q-icon name="emoji_people" />
          </q-avatar>시리시우네
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'

export default {
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  data() {
    return {
      // leftDrawerOpen: false,
      left: false
    };
  }
};
</script>
