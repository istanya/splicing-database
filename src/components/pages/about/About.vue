<template>
    <el-main class="text">
        <el-space direction="vertical" style="align-items: normal;">
            <el-text class="head">About iTRAVA</el-text>
            <el-text class="paragraph">Welcome to iTraVA – database for isoform discovery based on long reads.</el-text>
            <el-text class="paragraph">iTraVA is a spin-off of the widely used <a href="http://travadb.org">TraVA database</a> that takes transcriptomic analysis to the next level by focusing on the characterization of isoform expression using long-read sequencing. It is the first database for plant species that provides a comprehensive view of both isoform structure and expression. By providing high-confidence transcript data, iTRAVA is as a valuable resource for functional genomics and gene regulation studies.</el-text>
            <el-text class="paragraph">Currently, the database focuses on <i>Arabidopsis thaliana</i>, with future expansions planned for additional plant species. For <i>A. thaliana</i>, sequencing was conducted on Oxford Nanopore technologies (ONT) platform for 29 organs and tissues in two biological replicates, generating a dataset of 270 million high-quality reads. This resulted in the identification of 158 167 isoforms originating from 20 356 nuclear genes.</el-text>
            <el-text class="paragraph">iTRAVA was created using the <a href="https://github.com/albidgy/FLIC">FLIC tool</a> which ensures robust isoform reconstruction through a multi-step filtering and refinement process:</el-text>
            <el-text class="paragraph">- filtering of the raw reads: removal of low-quality reads and polyA tails, removal of reads that do have appropriate adapter sequences at both ends</el-text>
            <el-text class="paragraph">- mapping on the reference genome, with only uniquely mapped reads retained for further analysis</el-text>
            <el-text class="paragraph">- correction of the splice site coordinates using an Illumina-based transcriptome map as a source of information on splice junctions</el-text>
            <el-text class="paragraph">- downsampling of reads for highly expressed genes: if a gene coverage exceeded 1000 reads, a random subset of 1000 reads was selected. This allows to get rid of random noise and to improve the identification of transcription start sites (TSSs) and polyadenylation sites (PAs)</el-text>
            <el-text class="paragraph">- isoform reconstruction: reads sharing identical TSS, splice sites, and PA sites were grouped into isoforms. An isoform was considered valid if supported by at least 5 reads in one replicate and 1 read in another.</el-text>
            <el-text class="paragraph">- assignment of isoforms to genes: isoforms sharing more than 80% overlap were assigned to the same gene, with gene boundaries defined by the outermost coordinates of all associated isoforms. If a reconstructed isoform overlapped an annotated gene by at least 80%, it was assigned the corresponding Gene ID. Only isoforms accounting for at least 1% of the total gene expression were retained.</el-text>
            <el-text class="paragraph">The manuscript "iTraVA: a comprehensive database of <i>Arabidopsis thaliana</i> isoforms unveiled by long-read sequencing" is currently in preparation and will be published soon.</el-text>
        </el-space>
    </el-main>
</template>

<style>
.text {
    margin: 20px;
    margin-left: 60px;
    margin-right: 60px;
}

.paragraph {
    text-align: left;
    margin-bottom: 20px;
    --ep-text-font-size:var(--ep-font-size-large);
}
</style>