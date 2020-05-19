<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>안녕하세여
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <leftDrawer>
        나는 슬롯이에요
      </leftDrawer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>시리시우네
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'
import leftDrawer from "../pages/Drawer.vue";

export default {
  name: "MainLayout",

  components: {
    // EssentialLink
    leftDrawer
  },

  data() {
    return {
      // leftDrawerOpen: false,
      left: false
    };
  }
};
</script>
