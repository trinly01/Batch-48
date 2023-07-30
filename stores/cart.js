import { defineStore } from 'pinia';

export const useCart = defineStore('cart', {
  state: () => ({
    user: null,
    products: []
  }),
  getters: {
  },
  actions: {
    initialize () {
        console.log('i am a browser')
        this.products = JSON.parse(localStorage.getItem('cart')) || []
    },
    addToCart (product) {
        this.products.push(product)
        localStorage.setItem('cart', JSON.stringify(this.products))
    }
  },
});