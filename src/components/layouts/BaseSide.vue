<template>
  <el-container class='container'>
    <el-header class='header'><p>Enter gene id</p></el-header>
    <el-input 
      v-model='input'
      style='width: 90%'
    >
      <template #append>
            <el-button 
              :icon='Search' 
              @click='setGene'
            />
      </template>
    </el-input>
  </el-container>

  <el-container class='container'>
    <el-switch
      @change='setIsIGV'
      v-model='isIGV'
      class='mb-2'
      active-text='show genome browser'
    />
  </el-container>
  
  <el-container class='container'>
    <el-switch
      @change='setIsIsoformsWithOrfOnly'
      v-model='isIsoformsWithOrfOnly'
      class='mb-2'
      active-text='Isoforms with ORF only'
    />
  </el-container>

  <el-container class='container-group'>
    <el-switch
      @change='setIsSortByExpression'
      v-model='isSortByExpression'
      class='mb-2'
      active-text='Sort by expression'
    />
  </el-container>
  
  <el-container class='container-group'>
    <el-button 
      style='width: 270px'
      type='primary'
      @click='downloadFigureFile'
    >
    Download figure
    </el-button>
  </el-container>

  <el-container class='container'>
    <el-button 
      style='width: 270px'
      type='primary'
      @click='downloadIsoformStructureTableFile'
    >
    Download isoform structure table
    </el-button>
  </el-container>

  <el-container class='container-group'>
    <el-button 
      style='width: 270px'
      type='primary'
      @click='downloadIsoformExpressionTableFile'
    >
      Download isoform expression table
    </el-button>
  </el-container>

  <el-container class='container-group'>
    <el-button
      style='width: 270px' 
      type='primary'
      @click='downloadGeneAndIsoformsSequencesFile'
    >
      Download gene and isoforms sequences
    </el-button>
  </el-container>

  <el-container class='container-group'>
    <el-header class='header'><p>Sample description</p></el-header>
    <el-table 
      :data='tableData' 
      style='width: 270px'>
      <el-table-column prop=id label=id width='88px' />
      <el-table-column prop=sample label=sample width='172px' />
    </el-table>
  </el-container>
  
</template>

<script lang='ts' setup>
  import axios from 'axios';
  import { ref, computed } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import { useStore } from '~/store/state';
  import { MutationTypes, GeneData} from '~/store/state'

  const store = useStore();

  const input = ref(store.state.geneData.gene_id)
  const isIsoformsWithOrfOnly = ref(true)
  const isSortByExpression = ref(true)
  const isIGV = ref(false)

  const setGene = () => {
    store.state.geneData = store.state.geneDataMap.get(input.value) as GeneData

    isIGV.value = false
    store.commit(MutationTypes.SET_IS_IGV, isIGV);
  };

  const setIsIsoformsWithOrfOnly = () => {
    store.commit(MutationTypes.SET_IS_ISOFORMS_WITH_ORF_ONLY, isIsoformsWithOrfOnly);
  };

  const setIsSortByExpression = () => {
    store.commit(MutationTypes.SET_IS_SORT_BY_EXPRESSION, isSortByExpression);
  };

  const setIsIGV = () => {
    store.commit(MutationTypes.SET_IS_IGV, isIGV);
  };

  const downloadFigureFile = async() => {
      let fileUrl:string;
      if (store.state.isIsoformsWithOrfOnly && store.state.isSortByExpression){
        fileUrl = `${ store.state.dataUrl }/picts/picts_sort_by_expr_w_cds_only/${store.state.geneData.gene_id}.pdf`;
      } else if (!store.state.isIsoformsWithOrfOnly && store.state.isSortByExpression) {
        fileUrl = `${ store.state.dataUrl }/picts/picts_sort_by_expr_all/${store.state.geneData.gene_id}.pdf`;
      } else if (store.state.isIsoformsWithOrfOnly && !store.state.isSortByExpression) {
        fileUrl = `${ store.state.dataUrl }/picts/picts_sort_by_len_w_cds_only/${store.state.geneData.gene_id}.pdf`;
      } else {
        fileUrl = `${ store.state.dataUrl }/picts/picts_sort_by_len_all/${store.state.geneData.gene_id}.pdf`;
      }
   
      const fileName =`${store.state.geneData.gene_id}.pdf`;

      try {
        const response = await downloadFile(fileUrl, fileName);
      } catch (error) {
        console.error('Error downloading the file', error);
      }
    }

  const downloadIsoformStructureTableFile = async() => {
    const fileUrl =`${ store.state.dataUrl }/tables/iso_struct/${store.state.geneData.gene_id}.txt`;
    const fileName =`${store.state.geneData.gene_id}.txt`;

    try {
      const response = await downloadFile(fileUrl, fileName);
    } catch (error) {
      console.error('Error downloading the file', error);
    }
  }

  const downloadIsoformExpressionTableFile = async() => {
    const fileUrl =`${ store.state.dataUrl }/tables/iso_expr/${store.state.geneData.gene_id}.txt`;
    const fileName =`${store.state.geneData.gene_id}.txt`;

    try {
      const response = await downloadFile(fileUrl, fileName);
    } catch (error) {
      console.error('Error downloading the file', error);
    }
  }

  const downloadGeneAndIsoformsSequencesFile = async() => {
    const fileUrl =`${ store.state.dataUrl }/tables/fasta/${store.state.geneData.gene_id}.fasta`;
    const fileName =`${store.state.geneData.gene_id}.fasta`;

    try {
      const response = await downloadFile(fileUrl, fileName);
    } catch (error) {
      console.error('Error downloading the file', error);
    }
  }

  const downloadFile = async(fileUrl:string, fileName:string) => {
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
    

    const tableData = [
  {
    id: 'R.A',
    sample: 'Root apex'
  },
  {
    id: 'R',
    sample: 'Root without apex'
  },
  {
    id: 'M.v',
    sample: 'Vegetative meristem'
  },
  {
    id: 'M.r',
    sample: 'Inflorescence meristem'
  },
  {
    id: 'AP',
    sample: 'Inflorescence apex'
  },
  {
    id: 'SP+PT',
    sample: 'Perianth'
  },
  {
    id: 'FM',
    sample: 'Filament'
  },
  {
    id: 'AN',
    sample: 'Anther'
  },
  {
    id: 'CA',
    sample: 'Carpels without ovules'
  },
  {
    id: 'OV',
    sample: 'Ovules'
  },
  {
    id: 'SD.y',
    sample: 'Young seeds'
  },
  {
    id: 'SD',
    sample: 'Mature green seeds'
  },
  {
    id: 'SD.sn',
    sample: 'Yellow seeds'
  },
  {
    id: 'L.y',
    sample: 'Small leaf'
  },
  {
    id: 'L.i1',
    sample: 'Middle leaf'
  },
  {
    id: 'L.LAM.lg',
    sample: 'Mature leaf blade'
  },
  {
    id: 'L.PET.lg',
    sample: 'Mature leaf petiole'
  },
  {
    id: 'L.VN.lg',
    sample: 'Mature leaf vein'
  },
  {
    id: 'IN',
    sample: 'Green internode'
  },
  {
    id: 'IN.sn',
    sample: 'Yellow internode'
  },
  {
    id: 'L.sn',
    sample: 'Yellow leaf'
  },
  {
    id: 'POD.sn',
    sample: 'Yellow pod'
  },
  {
    id: 'Ctrl',
    sample: 'Cotyledons control'
  },
  {
    id: 'Heat3',
    sample: 'Cotyledons heat 03h'
  },
  {
    id: 'Heat27',
    sample: 'Cotyledons heat 27h'
  },
  {
    id: 'Cold03',
    sample: 'Cotyledons cold 03h'
  },
  {
    id: 'Cold27',
    sample: 'Cotyledons cold 27h'
  },
  {
    id: 'Wound03',
    sample: 'Cotyledons wound 03h'
  },
  {
    id: 'Wound27',
    sample: 'Cotyledons wound 27h'
  }
]
</script>

<style>
.container {
    margin-top: 30px;  
    margin-left: 20px;  
}

.container-group {
    margin-top: 10px;  
    margin-left: 20px;  
}

.header {
    text-align: left;
    margin-bottom: -15px;   
}
</style>