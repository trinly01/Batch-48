import { defineStore } from 'pinia';

export const useProductFilter = defineStore('productFilter', {
  state: () => ({
    searchText: '',
    activeTab: 'all',
  }),
  getters: {
    getSearchText: (state) => state.searchText,
    getActiveTab: (state) => state.activeTab,
  },
  actions: {
    setSearchText (text) {
      this.searchText = text;
    },
    setActiveTab (tab) {
      this.activeTab = tab;
    },
  },
});