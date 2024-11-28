<template>
  <div>
    <el-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 95%"
    >
      <el-card class="box-card">
        <el-scrollbar height="400px">
          <VuePDF :pdf="pdf" :page=1 :scale="scale"/>
        </el-scrollbar>
      </el-card>
    </el-space>
</div>
</template>

<script lang="ts" setup>
  import type { SpaceInstance } from 'element-plus'
  import { VuePDF, usePDF } from '@tato30/vue-pdf'
  import { ref, computed } from 'vue'
  import { useStore } from '~/store/state';

  const store = useStore();

  const pdfPath = computed((): string => {
    if (store.state.isFiltered) {
      return `${ store.state.dataUrl }/picts/common/${store.state.geneData.gene_id}.pdf`;
    }

    return `${ store.state.dataUrl }/picts/common/${store.state.geneData.gene_id}.pdf`;
  });

  const { pdf} = usePDF(pdfPath)
  const direction = ref<SpaceInstance['direction']>('horizontal')
  const fillRatio = ref(30)
  const scale = ref(0.4)
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 95%;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>