<template>
  <q-layout view="hHh LpR fff">
    <q-header reveal elevated class="bg-cyan-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <a
          type="button"
          href="/"
          role="link"
          class="q-btn q-btn-item non-selectable no-outline quasar-logo text-bold q-btn--flat q-btn--rectangle q-btn--actionable q-focusable q-btn--no-uppercase no-border-radius"
        >
          <q-toolbar-title>
            <q-avatar>
              <q-icon name="pets" />
            </q-avatar>
            <span style="text-align:center; margin-left:5px;">BLOG</span>
          </q-toolbar-title>
        </a>
        <div
          style="position: absolute; right: 20px; bottom: 5px;"
          v-if="!isLogin"
        >
          <q-btn
            class="q-btn--flat"
            icon="person_add"
            label="join"
            to="/join"
          />
          <q-btn
            class="q-btn--flat"
            icon="play_for_work"
            label="login"
            to="/login"
          />
        </div>
        <!-- TODO isLogin이 바로바로 바뀌게 하려면 vue x 라는 라이브러리를 쓰는게 좋다고 한다.
          computed도 써야한다고 한다. 음..... -->
        <div
          style="position: absolute; right: 20px; bottom: 5px;"
          v-else-if="isLogin"
        >
          <q-btn
            class="q-btn--flat"
            icon="directions_run"
            label="logout"
            @click="goLogout()"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      bordered
      :width="250"
      :breakpoint="400"
    >
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

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <!-- <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" /> -->
            <q-icon name="emoji_people" /> </q-avatar
          >시리시우네
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
/* eslint-disable vue/no-side-effects-in-computed-properties */
// import EssentialLink from 'components/EssentialLink'

export default {
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  created() {
    console.log("created");
    if (sessionStorage.getItem("mbNum")) {
      console.log(
        "sessionStorage.getItem('mbNum')@@@ ",
        sessionStorage.getItem("mbNum")
      );
      this.isLogin = true;
    }
    console.log("this.isLogin @@@ ", this.isLogin);
  },

  data() {
    return {
      // leftDrawerOpen: false,
      left: false,
      isLogin: false
    };
  },

  methods: {
    goLogout() {
      console.log("로그아웃을 해보자");
      sessionStorage.clear();
      alert("로그아웃했어요");
      this.isLogin = false;
    }
  }
};
</script>

<style lang="stylus"></style>
