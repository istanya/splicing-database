<template>
    <el-main class="text">
        <el-space direction="vertical" style="align-items: normal;">
            <el-text class="paragraph">iTRAVA is a comprehensive database designed for analyzing isoform expression in plants. It provides a detailed view of isoform structures and their expression profiles across various organs and tissues using ONT sequencing data. To search for isoform data, enter a Gene ID in the search field. Acceptable identifiers include TAIR identifiers (e.g., ATxGxxxxx) or gene symbols (e.g. CAT1 but not CATALASE 1). Note that not all gene symbols are available. If no results are found, try using the corresponding TAIR identifier instead.</el-text>
            <el-text class="paragraph">Example: Entering 'AT120630' will display isoforms corresponding to the CAT1 gene.</el-text>
            <el-text class="head">Visualization of isoform structure and expression</el-text>
            <el-text class="paragraph">In the main window, which can be moved up/down and left/right, information about isoform structure and expression profiles is displayed.</el-text>
            <el-text class="paragraph-start">For each gene, all isoforms are shown, including:</el-text>
            <el-text class="list">* TSS (Transcription Start Site) — marked with green segments.</el-text>
            <el-text class="list">* Exon-intron organization — exons are represented as blue segments, while introns are shown as gray lines.</el-text>
            <el-text class="list">* PA (Polyadenylation Site) — indicated with red segments.</el-text>
            <el-text class="paragraph">Additionally, if an ORF is predicted for an isoform, the longest ORF will be displayed with the start and stop codons marked.</el-text>
            <el-text class="head">* </el-text>
            <el-text class="paragraph">* </el-text>
    </el-space>
    </el-main>
</template>

<style>
.text {
    margin: 20px;
}

.paragraph {
    text-align: left;
    margin-bottom: 20px;
    --ep-text-font-size:var(--ep-font-size-large);
}

.paragraph-start {
    text-align: left;
    --ep-text-font-size:var(--ep-font-size-large);
}

.list {
    text-align: left;
    --ep-text-font-size:var(--ep-font-size-large);
}

.head {
    text-align: left;
    margin-bottom: 20px;
    color: var(--ep-color-primary);
    font-weight: bold;
    --ep-text-font-size: var(--ep-font-size-large);
}
</style>