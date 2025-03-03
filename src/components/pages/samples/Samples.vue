<template>
  <el-main class="text">
  <el-space direction="vertical">
    <el-text class="head">Sample description</el-text>
    <el-table 
      :data='tableData'>
      <el-table-column prop=id label=id />
      <el-table-column prop=sample label=sample width="600px"/>
    </el-table>
  </el-space>
</el-main>
</template>

<script lang='ts' setup>
    const tableData = [
  { id: 'R.A', sample: 'Apex of the root collected from plants at 7th DAG' },
  { id: 'R', sample: 'Root without apex collected from plants at 7th DAG' },
  { id: 'M.v', sample: 'Shoot apical meristem at vegetative state (9th DAG)' },
  { id: 'M.r', sample: 'Shoot apical meristem at reproductive state (14th DAG)' },
  { id: 'SP+PT', sample: 'Sepals and petals of 3rd flower at the stage of the anthesis of the 1st flower' },
  { id: 'CA', sample: 'Carpels without ovules of 3rd flower at the stage of the anthesis of the 1st flower' },
  { id: 'FM', sample: 'Stamen filaments of 3rd flower at the stage of the anthesis of the 1st flower' },
  { id: 'AN', sample: 'Anthers of various flowers at the stage of the anthesis of the 1st flower' },
  { id: 'AP', sample: 'Inflorescence apex at the stage of the anthesis of the 1st flower' },
  { id: 'OV', sample: 'Unpollinated ovules of 3rd flower at the stage of the anthesis of the 1st flower' },
  { id: 'SD.y', sample: 'Young green seeds of 3rd flower at the stage of the abscission of the 1st flower' },
  { id: 'SD', sample: 'Mature green seeds of 3rd flower at the stage with 1st silique is 1cm long' },
  { id: 'SD.sn', sample: 'Seeds of 1st yellow ready to open silique' },
  { id: 'L.y', sample: '3rd leaf (~ 3 mm in length) at 7th DAG' },
  { id: 'L.i1', sample: '3rd leaf (~10 mm in length) at 9th DAG' },
  { id: 'L.LAM.lg', sample: 'Leaf blade (veins were removed) of the mature leaf collected at the stage of the anthesis of the 1st flower' },
  { id: 'L.PET.lg', sample: 'Petiole of the mature leaf collected at the stage of the anthesis of the 1st flower' },
  { id: 'L.VN.lg', sample: 'Midrib of the mature leaf collected at the stage of the anthesis of the 1st flower' },
  { id: 'IN', sample: 'First elongated internode (from last rosette leaf to 1st cauline leaf) collected at the stage of the anthesis of the 1st flower' },
  { id: 'L.sn', sample: 'Senescent leaf collected when 1st silique was yellow and ready to open' },
  { id: 'IN.sn', sample: 'First elongated internode (from last rosette leaf to 1st cauline leaf) collected when 1st silique was yellow and ready to open' },
  { id: 'POD.sn', sample: 'Pod of 1st silique collected when 1st silique was yellow and ready to open' },
  { id: 'Ctrl', sample: 'Aerial parts of seedlings at 3 DAG' },
  { id: 'Heat3', sample: 'Aerial parts of seedlings at 3 DAG subjected to 42C for 3 hours (heat stress)' },
  { id: 'Heat27', sample: 'Aerial parts of seedlings at 3 DAG subjected to 42C for 27 hours (heat stress)' },
  { id: 'Wound3', sample: 'Aerial parts of seedlings at 3 DAG at 3 hours after puncturing of cotyledons with needle (wounding stress)' },
  { id: 'Wound27', sample: 'Aerial parts of seedlings at 3 DAG at 27 hours after puncturing of cotyledons with needle (wounding stress)' },
  { id: 'Cold3', sample: 'Aerial parts of seedlings at 3 DAG subjected to 4C for 3 hours (cold stress)' },
  { id: 'Cold27', sample: 'Aerial parts of seedlings at 3 DAG subjected to 4C for 27 hours (cold stress)' }
];
</script>
