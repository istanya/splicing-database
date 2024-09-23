import { createStore, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { InjectionKey } from 'vue';
import { useStore as baseUseStore } from 'vuex';
import jsonData from '~/data/gene.json';

export interface GeneData {
  gene_start: number;
  gene_end: number;
  seq_name: string;
  file_start: string;
  file_end: string;
}

const geneDataMap = new Map<string, GeneData>(Object.entries(jsonData));

export interface State {
    dataUrl: string;
    geneID: string;
    isFiltered: boolean;
    isIGV: boolean;
    geneData: GeneData;
    geneDataMap: Map<string, GeneData>;
  }


const state:State = {
    dataUrl:'https://travatrava.s3.eu-north-1.amazonaws.com',
    geneID:'AT1G01010',
    isFiltered:true,
    isIGV:false,
    geneData: geneDataMap.get('AT1G01010') as GeneData,
    geneDataMap: geneDataMap,
    
  };

export enum MutationTypes {
    SET_GENE = 'SET_GENE',
    SET_IS_FILTERED = 'SET_IS_FILTERED',
    SET_IS_IGV = 'SET_IS_IGV',
  }

export type Mutations<S = State> = {
    [MutationTypes.SET_GENE](state: S, geneID: string): void;
    [MutationTypes.SET_IS_FILTERED](state: S, isFiltered: boolean): void;
    [MutationTypes.SET_IS_IGV](state: S, isIGV: boolean): void;
  };
  
const mutations: Mutations = {
    [MutationTypes.SET_GENE](state, geneID: string) {
      state.geneID = geneID;
    },
    [MutationTypes.SET_IS_FILTERED](state, isFiltered: boolean) {
      state.isFiltered = isFiltered;
    },
    [MutationTypes.SET_IS_IGV](state, isIGV: boolean) {
      state.isIGV = isIGV;
    },
  };

  // Create a new store instance
export const store = createStore<State>({
    state,
    mutations,
  });

// Create Vuex typings for `useStore` helper
export const key: InjectionKey<VuexStore<State>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}
  