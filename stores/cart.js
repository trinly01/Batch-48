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
    async initialize () {
        console.log('i am a browser')
        // this.products = JSON.parse(localStorage.getItem('cart')) || []
        this.products = await $fetch('http://localhost:3030/cart/user/123')
    },
    async addToCart (product) {
        this.products.push(product)
        localStorage.setItem('cart', JSON.stringify(this.products))
        await $fetch('http://localhost:3030/cart/user/123', {
          method: 'PUT',
          body: {
            cart: this.products
          }
        })
        console.log('client saved')
    },
    async removeItem(product) {
        const i = this.products.findIndex(p => p.id === product.id)

        
        await useFetch('http://localhost:3030/cart/user/123/item/'+product.id, {
            method: 'DELETE',
        })
        this.products.splice(i, 1)
        console.log('client deleted')
        localStorage.setItem('cart', JSON.stringify(this.products))
    }
  },
});