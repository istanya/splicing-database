<template>
  <div v-if="error">
    <el-tag type="danger" class="error">Gene Id doesn't find or incorrect!</el-tag>
  </div>
  <div v-else-if="errorNoInformation">
    <el-tag type="danger" class="error">No isoforms with predicted ORFs</el-tag>
  </div>
  <div v-else>
    <el-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <el-card class="box-card">
        <el-scrollbar class="scrollbar" always height="600px">
          <VuePDF ref="VPDF" :pdf="pdf" :page=1 :scale="scale"/>
        </el-scrollbar>
      </el-card>
    </el-space>
</div>
</template>

<script lang="ts" setup>
  import type { SpaceInstance } from 'element-plus'
  import { VuePDF, usePDF, } from '@tato30/vue-pdf'
  import { ref, computed, } from 'vue'
  import { useStore } from '~/store/state';

  const store = useStore();

  const error = ref<string | null>(null);
  
  const pdfPath = computed((): string => {
    errorNoInformation.value = null;
    error.value = null;
    try {
      if (store.state.isIsoformsWithOrfOnly && store.state.isSortByExpression && !store.state.isMergeByOrfs){
        return `${ store.state.dataUrl }/picts/v2/picts_sort_by_expr_w_cds_only/${store.state.geneData.gene_id}.pdf`;
      } else if (!store.state.isIsoformsWithOrfOnly && store.state.isSortByExpression && !store.state.isMergeByOrfs) {
        return `${ store.state.dataUrl }/picts/v2/picts_sort_by_expr_all/${store.state.geneData.gene_id}.pdf`;
      } else if (store.state.isIsoformsWithOrfOnly && !store.state.isSortByExpression && !store.state.isMergeByOrfs) {
        return `${ store.state.dataUrl }/picts/v2/picts_sort_by_len_w_cds_only/${store.state.geneData.gene_id}.pdf`;
      } else if (!store.state.isIsoformsWithOrfOnly && !store.state.isSortByExpression && !store.state.isMergeByOrfs) {
        return `${ store.state.dataUrl }/picts/v2/picts_sort_by_len_all/${store.state.geneData.gene_id}.pdf`;
      } else if (!store.state.isSortByExpression && store.state.isMergeByOrfs) {
        return `${ store.state.dataUrl }/picts/v2/picts_orf_sort_by_len_all/${store.state.geneData.gene_id}.pdf`;
      } else if (store.state.isSortByExpression && store.state.isMergeByOrfs) {
        return `${ store.state.dataUrl }/picts/v2/picts_orf_sort_by_expr_all/${store.state.geneData.gene_id}.pdf`;
      }else{
        return ``
      }
    } catch (err) {
      error.value = (err as Error).message;
      return "Unknown gen_id";
    }
  });

  const errorNoInformation = ref<string | null>(null);
  function onError(err: any) {
    errorNoInformation.value = (err as Error).message;
  }

  const { pdf} = usePDF(pdfPath, {
    onError
  })
    
  const direction = ref<SpaceInstance['direction']>('horizontal')
  const fillRatio = ref(30)
  const scale = ref(0.4)
</script>

<style scoped>
.box-card {
  --ep-card-padding: 5px;
}

.scrollbar {
  color: var(--el-color-primary);
  --ep-scrollbar-opacity: 0.5;
  --ep-scrollbar-bg-color: var(--ep-color-primary);
  --ep-scrollbar-hover-opacity: 0.8;
  --ep-scrollbar-hover-bg-color: var(--ep-color-primary);
}

.error {
  --ep-tag-font-size: var(--ep-font-size-large);
  height: 30px;
}

::v-deep(.ep-scrollbar__bar.is-horizontal) {
  height: 10px;
}

::v-deep(.ep-scrollbar__bar.is-vertical) {
  width: 10px;
}
</style>