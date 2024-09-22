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
    v-model="input"
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
      @change="setIsFiltered"
      v-model="isFiltered"
      class="mb-2"
      active-text="filtered"
    />
  </div>
  <div>
    <el-switch
      @change="setIsIGV"
      v-model="isIGV"
      class="mb-2"
      active-text="show genome browser"
    />
  </div>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref} from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import { useStore } from '~/store/state';
  import { MutationTypes} from '~/store/state'

  
  const input = ref('')
  const isFiltered = ref(false)
  const isIGV = ref(false)

  const store = useStore();

  const setGene = () => {
    store.commit(MutationTypes.SET_GENE, input);
  };

  const setIsFiltered = () => {
    store.commit(MutationTypes.SET_IS_FILTERED, isFiltered);
  };

  const setIsIGV = () => {
    store.commit(MutationTypes.SET_IS_IGV, isIGV);
  };
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
