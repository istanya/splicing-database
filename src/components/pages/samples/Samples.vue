<template>
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
