<template>
    <el-aside width="300px">
        <BaseSide  />
    </el-aside>
    <el-main w="full" py="4" class="main">
        <ImageCommon />
        <IGV v-if="store.state.isIGV"/>
    </el-main>
</template>

<script lang="ts" setup>
  import { useStore } from '~/store/state';

  const store = useStore();
</script>

<style>
.main {
    --ep-main-padding: 10px;
}
</style>
