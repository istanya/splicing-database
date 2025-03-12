<template>
    <el-main class="text">
        <el-space direction="vertical" style="align-items: normal;">
            <el-text class="paragraph">iTRAVA is a comprehensive database designed for analyzing isoform expression in plants. It provides a detailed view of isoform structures and their expression profiles across various organs and tissues using ONT sequencing data. To search for isoform data, enter a Gene ID in the search field. Acceptable identifiers include TAIR identifiers (e.g., ATxGxxxxx) or gene symbols (e.g. CAT1 but not CATALASE 1). Note that not all gene symbols are available. If no results are found, try using the corresponding TAIR identifier instead.</el-text>
            <el-text class="paragraph">Example: Entering 'AT120630' will display isoforms corresponding to the CAT1 gene.</el-text>
            <el-image class="image" fit="contain" :src="screen1" />
            <el-text class="head">Visualization of isoform structure and expression</el-text>
            <el-text class="paragraph">In the main window, which can be moved up/down and left/right, information about isoform structure and expression profiles is displayed.</el-text>
            <el-image class="image" fit="contain" :src="screen2" />
            <el-text class="paragraph-start">For each gene, all isoforms are shown, including:</el-text>
            <el-text class="list">* TSS (Transcription Start Site) — marked with green segments.</el-text>
            <el-text class="list">* Exon-intron organization — exons are represented as blue segments, while introns are shown as gray lines.</el-text>
            <el-text class="list">* PA (Polyadenylation Site) — indicated with red segments.</el-text>
            <el-text class="paragraph">Additionally, if an ORF is predicted for an isoform, the longest ORF will be displayed with the start and stop codons marked.</el-text>
            <el-image class="image" fit="contain" :src="screen3" />
            <el-text class="paragraph">By moving the scrollbar to the right, you can see isoform expression profiles across 29 organs and tissues (for further information see "<el-text class="bold">Samples</el-text>").</el-text>
            <el-text class="paragraph">Expression values were calculated using normalized long ONT reads with the <a href="https://doi.org/10.1186/gb-2010-11-3-r25">TMM method</a>. For each isoform, expression in individual samples is shown as a block with normalized read counts and colored by shades of purple. White indicates low expression levels (or no expression), while dark purple represents the highest expression levels.</el-text>
            <el-text class="paragraph">The intensity of each sample box is determined by the expression values of isoforms within the same gene. Additionally, red numbers show the percentage contribution of each isoform to the total gene expression.</el-text>
            <el-text class="head">Genome Browser IGV</el-text>
            <el-text class="paragraph">By enabling the "show genome browser" option, users can view information about all uniquely mapped reads in two biological replicates separately, which were used to reconstruct the isoforms. The <a href="https://doi.org/10.1038/nbt.1754">IGV genome browser</a> is used for visualization.</el-text>
            <el-text class="paragraph">Each window has scrollbars on the right that allow users to scroll up and down to fully view all reconstructed isoforms and the corresponding read mappings.</el-text>
            <el-text class="paragraph">Please note that with high gene coverage, the genome browser may take longer to load.</el-text>
            <el-image class="image" fit="contain" :src="screen4" />
            <el-text class="head">Data filtering</el-text>
            <el-text class="paragraph">In iTRAVA you can filter data using additional buttons. Both buttons can be combined.</el-text>
            <el-space direction="horizontal" style="align-items: normal;margin-bottom: 20px;">
                <el-container style="width: 250px;">
                    <el-image fit="contain" :src="screen_filter_1" />
                </el-container>
                <el-text class="text_by_image">By clicking the “Isoforms with ORF only” button, only isoforms for which ORF was predicted can be left on the isoform structure and expression figure.</el-text>
            </el-space>
            <el-space direction="horizontal" style="align-items: normal;margin-bottom: 20px;">
                <el-container style="width: 250px;">
                    <el-image fit="contain" :src="screen_filter_2" />
                </el-container>
                <el-text class="text_by_image">By clicking the “Sort by expression” button, you can sort isoforms by expression level in descending order.</el-text>
            </el-space>
            <el-text class="head">Downloading Data</el-text>
            <el-text class="paragraph">Data on the structure and expression profiles of isoforms can be downloaded. Applied filters affect the loading of the image only.</el-text>
            <el-space direction="horizontal" style="align-items: normal;margin-bottom: 20px;">
                <el-container style="width: 300px;">
                    <el-image fit="contain" :src="screen_download_1" />
                </el-container>
                <el-text class="text_by_image">Download a figure from the main window (isoform structure and expression levels across samples) in PDF format. Depending on the set filters the corresponding figure will be downloaded.</el-text>
            </el-space>
            <el-space direction="horizontal" style="align-items: normal;margin-bottom: 20px;">
                <el-container style="width: 300px;">
                    <el-image fit="contain" :src="screen_download_2" />
                </el-container>
                <el-text class="text_by_image">Download isoform structure in TXT format. Each isoform is presented by TSS, splice sites and PA. 1-based indexing.</el-text>
            </el-space>
            <el-space direction="horizontal" style="align-items: normal;margin-bottom: 20px;">
                <el-container style="width: 300px;">
                    <el-image fit="contain" :src="screen_download_3" />
                </el-container>
                <el-text class="text_by_image">Download isoform expression in TXT format. The table contains normalized expression values.</el-text>
            </el-space>
            <el-space direction="horizontal" style="align-items: normal;margin-bottom: 20px;">
                <el-container style="width: 300px;">
                    <el-image fit="contain" :src="screen_download_4" />
                </el-container>
                <el-text class="text_by_image">Download gene and isoform sequences in FASTA format. The FASTA file contains the sequence of the gene followed by the sequence of all reconstructed isoforms.</el-text>
            </el-space>
            <el-text class="head">Data specifics</el-text>
            <el-text class="paragraph"><el-text class="bold">! Case 1:</el-text> During ORF prediction, only the standard start codon ATG is considered, and the longest ORF is selected for each transcript. However, some genes have alternative start codons, resulting in incorrect ORF annotation. For example, in the AT4G18960 gene, the coding sequence does not start with ATG, meaning the automatically predicted ORF is incorrect.</el-text>
            <el-image class="image" fit="contain" :src="screen5" />
            <el-text class="paragraph"><el-text class="bold">! Case 2:</el-text> During isoform reconstruction, we applied additional filtering based on isoform coverage by the long reads used for their assembly. If a gene had low coverage, some or all of its isoforms may have been excluded as unreliable. To facilitate the analysis of such cases, we provide mapping results for all reads in separate replicates, allowing for manual curation of the gene and its isoforms. An example of such case is the AT2G17950 (WUS) gene, where low coverage resulted in the filtering out of certain isoforms.</el-text>
            <el-text class="paragraph"><el-text class="bold">! Case 3:</el-text> During gene reconstruction, some TAIR10.1 genes were divided into two or more subgenes if their isoforms, despite belonging to the same gene in the reference annotation, did not overlap. In such cases, isoform names on the main plot are labeled with both the subgene number and the isoform number (e.g., 1.1, 2.1).</el-text>
            <el-text class="paragraph">Example: In the AT1G04945 gene, two isoforms located closer to the 5' end (1.1 and 1.2) are assigned to subgene 1, while three isoforms positioned near the 3' end (2.2, 2.3, and 2.4) belong to subgene 2.</el-text>
            <el-image class="image" fit="contain" :src="screen6" />
            <el-text class="head">Acknowledgements</el-text>
            <el-text class="paragraph">We thank Sofia Yudina for designing the database emblem.</el-text>
    </el-space>
    </el-main>
</template>

<script lang="ts" setup>
  import { useStore } from '~/store/state';

  const store = useStore();

  const datPath = store.state.dataUrl;
  const screen1 = `${ datPath }/style_data/screen_1.png`
  const screen2 = `${ datPath }/style_data/screen_2.png`
  const screen3 = `${ datPath }/style_data/screen_3.png`
  const screen4 = `${ datPath }/style_data/screen_4.png`
  const screen5 = `${ datPath }/style_data/screen_5.png`
  const screen6 = `${ datPath }/style_data/screen_6.png`
  const screen_filter_1 = `${ datPath }/style_data/screen_filter_1.png`
  const screen_filter_2 = `${ datPath }/style_data/screen_filter_2.png`
  const screen_download_1 = `${ datPath }/style_data/screen_download_1.png`
  const screen_download_2 = `${ datPath }/style_data/screen_download_2.png`
  const screen_download_3 = `${ datPath }/style_data/screen_download_3.png`
  const screen_download_4 = `${ datPath }/style_data/screen_download_4.png`
</script>

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

.bold {
    font-weight: bold;
    --ep-text-font-size: var(--ep-font-size-large);
}

.image {
    margin-bottom: 20px;
}

.text_by_image{
    text-align: left;
    --ep-text-font-size:var(--ep-font-size-large);
}
</style>