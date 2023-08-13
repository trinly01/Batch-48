import { defineStore } from 'pinia';
import { ofetch } from 'ofetch';

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
        const jwt = localStorage.getItem('jwt') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkxOTA2MzAwLCJleHAiOjE2OTQ0OTgzMDB9.MnAUjYUMAufqMvlTrC6Poh2l2YtSeK47YJgI2c5tGqk'
        const { data: cart } = await ofetch('http://localhost:1337/api/carts?filters[user]=1', {
          headers: {
            Authorization: "Bearer " + jwt,
          }
        })

        this.products = cart.map(i => {
          return {
            id: i.id,
            ...i.attributes
          }
        })
    },
    async addToCart (product) {
        this.products.push(product)
        localStorage.setItem('cart', JSON.stringify(this.products))
        // await $fetch('http://localhost:3030/cart/user/123', {
        //   method: 'PUT',
        //   body: {
        //     cart: this.products
        //   }
        // })

        const jwt = localStorage.getItem('jwt') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkxOTA2MzAwLCJleHAiOjE2OTQ0OTgzMDB9.MnAUjYUMAufqMvlTrC6Poh2l2YtSeK47YJgI2c5tGqk'
        
        await ofetch('http://localhost:1337/api/carts', {
          headers: {
            Authorization: "Bearer " + jwt,
          },
          method: 'POST',
          body: {
            data: {
              user: 1,
              title: product.title,
              price: product.price,
              description: product.description,
              category: product.category,
              image: product.image,
              rating: product.rating
            }
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