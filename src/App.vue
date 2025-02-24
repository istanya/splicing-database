<template>
  <el-config-provider namespace="ep">
    <el-header style="height:40px"><Cascader /></el-header>
    <el-header style="height:50px"><BaseHeader /></el-header>
    <el-container>
      <router-view />
    </el-container>
  </el-config-provider>
</template>

<script lang="ts" setup>
  import { useStore } from '~/store/state';

  const store = useStore();
</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

</style>
