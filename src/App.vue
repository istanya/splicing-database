<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <el-container>
      <el-aside width="300px">
        <BaseSide  />
      </el-aside>
      <el-main w="full" py="4">
        <ImageCommon />
        <Struct />
        <Expr />
        <IGV v-if="store.state.isIGV"/>
      </el-main>
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
