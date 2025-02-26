import { createStore, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { InjectionKey } from 'vue';
import { useStore as baseUseStore } from 'vuex';
import jsonData from '~/data/gene.json';

export interface GeneData {
  gene_id: string;
  gene_start: number;
  gene_end: number;
  seq_name: string;
  file_start: string;
  file_end: string;
}

const geneDataMap = new Map<string, GeneData>(Object.entries(jsonData));

export interface State {
    dataUrl: string;
    isIsoformsWithOrfOnly: boolean;
    isSortByExpression: boolean;
    isIGV: boolean;
    geneData: GeneData;
    geneDataMap: Map<string, GeneData>;
  }


const state:State = {
    dataUrl:'https://travatrava.s3.eu-north-1.amazonaws.com',
    isIsoformsWithOrfOnly:false,
    isSortByExpression:false,
    isIGV:false,
    geneData: geneDataMap.get('AT5G67560') as GeneData,
    geneDataMap: geneDataMap,
    
  };

export enum MutationTypes {
    SET_IS_ISOFORMS_WITH_ORF_ONLY = 'SET_IS_ISOFORMS_WITH_ORF_ONLY',
    SET_IS_SORT_BY_EXPRESSION = 'SET_IS_SORT_BY_EXPRESSION',
    SET_IS_IGV = 'SET_IS_IGV',
  }

export type Mutations<S = State> = {
    [MutationTypes.SET_IS_ISOFORMS_WITH_ORF_ONLY](state: S, isIsoformsWithOrfOnly: boolean): void;
    [MutationTypes.SET_IS_SORT_BY_EXPRESSION](state: S, isSortByExpression: boolean): void;
    [MutationTypes.SET_IS_IGV](state: S, isIGV: boolean): void;
  };
  
const mutations: Mutations = {
    [MutationTypes.SET_IS_ISOFORMS_WITH_ORF_ONLY](state, isIsoformsWithOrfOnly: boolean) {
      state.isIsoformsWithOrfOnly = isIsoformsWithOrfOnly;
    },
    [MutationTypes.SET_IS_SORT_BY_EXPRESSION](state, isSortByExpression: boolean) {
      state.isSortByExpression = isSortByExpression;
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
  