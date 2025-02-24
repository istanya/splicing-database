<template>
  <div id="igvModalBrowser" style="padding-top: 10px;padding-bottom: 10px; border:1px solid lightgray"></div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useStore } from '~/store/state';

  import igv from 'igv'

  const store = useStore();
  const datPath = store.state.dataUrl;

  const region = `${ store.state.geneData.seq_name }:${ store.state.geneData.gene_start }-${ store.state.geneData.gene_end }`;

  const fastaURL = `${ datPath }/fasta/GCF_000001735.4_TAIR10.1_genomic_${ store.state.geneData.seq_name }.fasta`
  const indexURL = `${ datPath }/fasta/GCF_000001735.4_TAIR10.1_genomic_${ store.state.geneData.seq_name }.fasta.fai`

  const gtfURL = `${ datPath }/gtf/v4_annotation_${ store.state.geneData.seq_name }_${ store.state.geneData.file_start }_${ store.state.geneData.file_end }.gtf`

  const bam1URL = `${ datPath }/bam_files/1/unique_map_nanopore_rep_1_${ store.state.geneData.seq_name }_${ store.state.geneData.file_start }_${ store.state.geneData.file_end }.sorted.bam`
  const bai1URL = `${ datPath }/bam_files/1/unique_map_nanopore_rep_1_${ store.state.geneData.seq_name }_${ store.state.geneData.file_start }_${ store.state.geneData.file_end }.sorted.bam.bai`

  const bam2URL = `${ datPath }/bam_files/2/unique_map_nanopore_rep_2_${ store.state.geneData.seq_name }_${ store.state.geneData.file_start }_${ store.state.geneData.file_end }.sorted.bam`
  const bai2URL = `${ datPath }/bam_files/2/unique_map_nanopore_rep_2_${ store.state.geneData.seq_name }_${ store.state.geneData.file_start }_${ store.state.geneData.file_end }.sorted.bam.bai`

  
  const options =
    {
        locus: region,
        reference: {
            "id": store.state.geneData.seq_name,
            "fastaURL": fastaURL,
            "indexURL": indexURL,
        },
        tracks:
            [
                {
                    "type": "annotation",
                    "format": "gtf",
                    "url": gtfURL,
                    "name": "gencode(gtf)",
                    "visibilityWindow": 10000000,
                    "filterTypes": ["gene", "chromosome"],
                    "selected": true,
                    height: 200,
                },
                {
                    "type": "alignment",
                    "url": bam1URL,
                    "indexURL": bai1URL,
                    "name": "rep1",
                    "format": "bam",
                    "colorBy": "strand",
                    "showMismatches": false,
                    "showInsertions": false,
                    height: 700,
                },
                {
                    "type": "alignment",
                    "url": bam2URL,
                    "indexURL": bai2URL,
                    "name": "rep2",
                    "format": "bam",
                    "colorBy": "strand",
                    "showMismatches": false,
                    "showInsertions": false,
                    height: 700,
                }
            ]
    }

  onMounted(() => {
    const igvDiv = document.getElementById("igvModalBrowser")
    igv.createBrowser(igvDiv, options)
});
  
</script>

