<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style lang="scss">
html {
  height: 100%;
  width: 100%;
  body {
    height: 100%;
    width: 100%;
    margin: 0;

    #app {
      height: 100%;
      width: 100%;

      -moz-user-select: none; /* 火狐 */
      -webkit-user-select: none; /* 谷歌 */
      -ms-user-select: none; /* IE */
      user-select: none;
    }
  }
}
</style>
