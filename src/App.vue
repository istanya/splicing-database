<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide v-model="gene" />
      <div w="full" py="4">
        <Struct :gene="gene"/>
        <Expr :gene="gene" />
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gene = ref('AT1G01020')
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
