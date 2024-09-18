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
    v-model="inputGene"
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
      v-model="filtered"
      class="mb-2"
      active-text="filtered"
    />
  </div>
  <div>
    <el-button type="primary" plain>show genome browser</el-button>
  </div>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'

  const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
 
  const filtered = ref(false)
  const inputGene = ref('')

  const setGene = () => {
    emit('update:modelValue', inputGene.value);
  };
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
