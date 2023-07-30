import { defineStore } from 'pinia';

export const useCart = defineStore('cart', {
  state: () => ({
    user: null,
    products: []
  }),
  getters: {
    consolidatedItemsByQuantity () {
        // detect how many quantities per item.
        // use map // or for loop
        // "for in" or "for of"
        // temporary Array/Object for counters

        [{name: 'shorts'}, {name: 'shorts'}, {name: 'pants'}]

        [[{name: 'shorts', qty: 2}, {name: 'pants', qty: 1}]]

        return this.products
    }
  },
  actions: {
    initialize () {
        console.log('i am a browser')
        this.products = JSON.parse(localStorage.getItem('cart')) || []
    },
    addToCart (product) {
        this.products.push(product)
        localStorage.setItem('cart', JSON.stringify(this.products))
    },
    removeItem(product) {
        const i = this.products.findIndex(p => p.id === product.id)

        this.products.splice(i, 1)
        localStorage.setItem('cart', JSON.stringify(this.products))
    }
  },
});