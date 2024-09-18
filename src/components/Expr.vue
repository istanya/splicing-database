<script lang="ts" setup>
import type { SpaceInstance } from 'element-plus'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { ref, computed } from 'vue'

interface Props {
  gene: string;
}

const props = defineProps<Props>();

const pdfPath = computed((): string => {
  return `https://travatrava.s3.eu-north-1.amazonaws.com/${props.gene}_expr.pdf`;
});

const { pdf} = usePDF(pdfPath)
const direction = ref<SpaceInstance['direction']>('horizontal')
const fillRatio = ref(30)
</script>

<template>
  <div>{{ pdfPath }}</div>
  <div>
    <el-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 90%"
    >
      <el-card class="box-card">
        <el-scrollbar height="400px">
          <VuePDF :pdf="pdf" :page=1 />
        </el-scrollbar>
      </el-card>
    </el-space>
</div>
</template>


<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>