<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide  />
      <div w="full" py="4">
        <Struct />
        <Expr />
        <IGV v-if="store.state.isIGV"/>
      </div>
    </div>
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

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>
