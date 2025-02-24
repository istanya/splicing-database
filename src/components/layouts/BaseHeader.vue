<template>
  <el-menu :default-active="route.path" router class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/">Browse DB</el-menu-item>
    <el-menu-item index="/how_to_use">How to use</el-menu-item>
    <el-menu-item index="/samples">Samples</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
