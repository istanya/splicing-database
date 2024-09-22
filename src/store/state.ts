import { createStore, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { InjectionKey } from 'vue';
import { useStore as baseUseStore } from 'vuex';

export interface State {
    geneID: string;
    isFiltered: boolean;
    isIGV: boolean;
  }


const state:State = {
    geneID:'AT1G01020',
    isFiltered:false,
    isIGV:false,
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
  