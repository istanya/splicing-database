<template>
  <el-menu :default-active="route.path" router class="menu" mode="horizontal" style="width: 470px">
    <el-menu-item index="/splicing_database/">About</el-menu-item>
    <el-menu-item index="/splicing_database/browse_db">Browse DB</el-menu-item>
    <el-menu-item index="/splicing_database/how_to_use">How to use</el-menu-item>
    <el-menu-item index="/splicing_database/samples">Samples</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
.ep-menu--horizontal.ep-menu {
  border-bottom: 0px;
}
</style>