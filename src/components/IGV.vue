<template>
  <div id="igvModalBrowser" style="padding-top: 10px;padding-bottom: 10px; border:1px solid lightgray"></div>
</template>

<script lang="ts" setup>
  import { onBeforeMount } from 'vue';
  import { onMounted } from 'vue';

  import igv from 'igv'
  
  const options =
    {
        locus: "NC_003070.9:392,668-392,751",
        reference: {
            "id": "NC_003070.9",
            "fastaURL": "https://travatrava.s3.eu-north-1.amazonaws.com/athaliana_1Mb.fasta",
            "indexURL": "https://travatrava.s3.eu-north-1.amazonaws.com/athaliana_1Mb.fasta.fai",
        },
        tracks:
            [
                {
                    "type": "annotation",
                    "format": "gtf",
                    "url": "https://travatrava.s3.eu-north-1.amazonaws.com/annotation.gtf",
                    "name": "Gencode (gtf) -- genes filtered",
                    "visibilityWindow": 10000000,
                    "filterTypes": ["gene", "chromosome"],
                    "selected": true
                },
                {
                "type": "alignment",
                "url": "https://travatrava.s3.eu-north-1.amazonaws.com/unique_map_rep1.sorted.bam",
                "indexURL": "https://travatrava.s3.eu-north-1.amazonaws.com/unique_map_rep1.sorted.bam.bai",
                "name": "rep1",
                "format": "bam",
                groupBy: "strand",
                height: 700,
                filter: {mq: 30}
            },
            {
                "type": "alignment",
                "url": "https://travatrava.s3.eu-north-1.amazonaws.com/unique_map_rep2.sorted.bam",
                "indexURL": "https://travatrava.s3.eu-north-1.amazonaws.com/unique_map_rep2.sorted.bam.bai",
                "name": "rep2",
                "format": "bam",
                groupBy: "strand",
                height: 700,
                filter: {mq: 30}
            }
            ]
    }

  onMounted(() => {
    const igvDiv = document.getElementById("igvModalBrowser")
    igv.createBrowser(igvDiv, options)
});
  
</script>

