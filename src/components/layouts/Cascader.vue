<template>
  <el-container class='container'>
    <el-cascader :options="options" :show-all-levels="false" :model-value="value"/>
  </el-container>
</template>
  
<script lang="ts" setup>
  const options = [
  {
    value: 'arabidopsis_thaliana',
    label: 'Arabidopsis thaliana',
  }
]

var value =  'arabidopsis_thaliana'
</script>

<style>
.container {
    margin-top: 10px;
    text-align: left;
  }
</style>