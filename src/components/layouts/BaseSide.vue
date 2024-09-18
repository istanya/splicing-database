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
    v-model="settings.gene"
    class="m-2" 
    style="width: 90%"
    placeholder="Please input"
  >
    <template #append>
          <el-button 
            :icon="Search" 
            @click="setGene"
          />
    </template>
  </el-input>
  </div>
  <div>
    <el-switch
      v-model="settings.isFiltered"
      class="mb-2"
      active-text="filtered"
    />
  </div>
  <div>
    <el-switch
      v-model="settings.isIGV"
      class="mb-2"
      active-text="show genome browser"
    />
  </div>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import { Settings } from '~/types/settings';


  const emit = defineEmits<{
  (e: 'update:modelValue', value: Settings): void;
}>();


  const settings:Settings = reactive({
    gene:'',
    isFiltered:false,
    isIGV:false,
  });


  const setGene = () => {
    emit('update:modelValue', settings);
  };
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
