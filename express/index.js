const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3030;

app.use(express.json())
app.use(cors());

const usersDB = {
    123: [{ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }, { "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }]
}

app.listen(port, () => {
    console.log('listening  on port ' + port);
})


app.get('/', (req, res) => {
    res.send('<h1>Hello Batch 48!</h1>')
})


app.get('/cart/user/:id', (req, res) => {
    console.log('id...', req.params.id)
    if (usersDB[req.params.id]) {
        res.json(usersDB[req.params.id])
    } else {
        res.status(404).json({
            message: 'Cart not found'
        })
    }
})

app.post('/cart/user', (req, res) => {
    console.log('saving cart', req.body.userID)
    usersDB[req.body.userID] = [...req.body.cart]
    res.json({
        message: 'Cart created'
    })
})

app.put('/cart/user/:id', (req, res) => {
    console.log('editing cart', req.params.id)
    usersDB[req.params.id] = [...req.body.cart]
    res.json({
        message: 'Cart saved'
    })
})

app.delete('/cart/user/:userID/item/:itemID', (req, res) => {
    console.log('deleting cart item', req.params.itemID)
    const itemID = req.params.itemID
    const userID = req.params.userID
    console.log('userID', userID)
    console.log('item', itemID)
    const i = usersDB[userID].findIndex(item => +item.id === +itemID)
    console.log('index', i)
    usersDB[userID].splice(i, 1)
    res.json({
        message: 'Item deleted successfully'
    })
})