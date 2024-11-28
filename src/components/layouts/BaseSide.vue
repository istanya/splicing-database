<template>
  <el-container class="container">
    <el-header class="header"><p>Enter gene id</p></el-header>
    <el-input 
      v-model="input"
      style="width: 90%"
    >
      <template #append>
            <el-button 
              :icon="Search" 
              @click="setGene"
            />
      </template>
    </el-input>
  </el-container>
  
  <el-container class="container">
    <el-switch
      @change="setIsFiltered"
      v-model="isFiltered"
      class="mb-2"
      active-text="filtered"
    />
  </el-container>
  
  <el-container class="container">
    <el-button 
      type="primary"
      @click="downloadFile"
    >
      download
    </el-button>
  </el-container>
  
  <el-container class="container">
    <el-switch
      @change="setIsIGV"
      v-model="isIGV"
      class="mb-2"
      active-text="show genome browser"
    />
  </el-container>
  
</template>

<script lang="ts" setup>
  import axios from 'axios';
  import { ref, computed } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import { useStore } from '~/store/state';
  import { MutationTypes, GeneData} from '~/store/state'

  const store = useStore();

  const input = ref(store.state.geneData.gene_id)
  const isFiltered = ref(true)
  const isIGV = ref(false)

  const setGene = () => {
    store.state.geneData = store.state.geneDataMap.get(input.value) as GeneData

    isIGV.value = false
    store.commit(MutationTypes.SET_IS_IGV, isIGV);
  };

  const setIsFiltered = () => {
    store.commit(MutationTypes.SET_IS_FILTERED, isFiltered);
  };

  const setIsIGV = () => {
    store.commit(MutationTypes.SET_IS_IGV, isIGV);
  };

  const downloadFile= async() => {
      const fileUrl = `${ store.state.dataUrl }/picts/common/${store.state.geneData.gene_id}.pdf`; // Replace with your file URL
      const fileName =`${store.state.geneData.gene_id}.pdf`; // Replace with desired file name

      try {
        const response = await axios.get(fileUrl, {
          responseType: 'blob', // Important: Get file as a Blob
        });

        // Create a blob URL
        const blob = new Blob([response.data]);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();

        // Clean up
        URL.revokeObjectURL(link.href);
      } catch (error) {
        console.error('Error downloading the file', error);
      }
    }

</script>

<style>
.container {
    margin-top: 30px;  
    margin-left: 20px;  
}

.header {
    text-align: left;
    margin-bottom: -15px;   
}
</style>