<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide v-model="settings" />
      <div w="full" py="4">
        <Struct :gene="settings.gene"/>
        <Expr :gene="settings.gene" />
        <IGV />
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Settings } from './types/settings';

const settings:Settings = reactive({
    gene:'AT1G01020',
    isFiltered:false,
    isIGV:false,
  });

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
