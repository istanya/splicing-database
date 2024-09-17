<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="false"
  >
  <div>
    <p>Enter gene id</p>
  </div>
  <div>
  <el-input 
    v-model="input1"
    class="m-2" 
    style="width: 90%"
    placeholder="Please input"
  >
    <template #append>
          <el-button :icon="Search" />
    </template>
  </el-input>
  </div>
  <div>
  <el-button type="primary" plain>show genome browser</el-button>
  </div>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'

  const input1 = ref('')
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
