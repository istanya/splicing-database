<template>
  <el-config-provider namespace="ep">
    <el-container style="border-bottom: solid 1px var(--ep-menu-border-color);">
      <el-aside width="470px">
        <el-container ><Cascader /></el-container>
        <el-container ><BaseHeader /></el-container>
      </el-aside>
      <el-main style="padding: 0px; text-align:left">
        <el-image class="image-logo" fit="contain" :src="dbLogo" />
      </el-main>
      <el-aside width="100px">
        <el-image :src="dbLogoAside" />
      </el-aside>
    </el-container>
    <el-container>
      <router-view />
    </el-container>
  </el-config-provider>
</template>

<script lang="ts" setup>
  import { useStore } from '~/store/state';

  const store = useStore();

  const datPath = store.state.dataUrl;
  const dbLogo = `${ datPath }/style_data/db_logo.jpeg`
  const dbLogoAside = `${ datPath }/style_data/VIGG_PGL_IT_3.jpg`
</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.image-logo {
  height: 105px
}
</style>