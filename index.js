

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
const path = require('path');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

import { jeweleries, blog, clothing, homeDecor, kitchenUtensils, varieties} from './fireservice.js';
app.use(express.static(path.join(__dirname, 'front')));




// FETCH THE SHOP PRODUCTS
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'index.html'), (err) => {
        if (err) {
            console.log('Error sending HTML:', err);
            res.status(500).send('Server Error');
        }
    });
});












// FETCH THE SHOP PRODUCTS
app.get('/products/jeweleries', async (req, res) => {
    try {
        let snapshot = await jeweleries.get()
        let products = snapshot.docs.map(doc => doc.data())
        res.status(200).json(products)
    } catch (error) {
        console.log('Error fetching products :', error);
        res.status(400).json({
            message: error.message
        })  
    }
})

app.get('/products/clothing', async (req, res) => {
    try {
        let snapshot = await clothing.get()
        let products = snapshot.docs.map(doc => doc.data())
        res.status(200).json(products)
    } catch (error) {
        console.log('Error fetching products :', error);
        res.status(400).json({
            message: error.message
        })  
    }
})
app.get('/products/homeDecoration', async (req, res) => {
    try {
        let snapshot = await homeDecor.get()
        let products = snapshot.docs.map(doc => doc.data())
        res.status(200).json(products)
    } catch (error) {
        console.log('Error fetching products :', error);
        res.status(400).json({
            message: error.message
        })  
    }
})
app.get('/products/kitchenUtensils', async (req, res) => {
    try {
        let snapshot = await kitchenUtensils.get()
        let products = snapshot.docs.map(doc => doc.data())
        res.status(200).json(products)
    } catch (error) {
        console.log('Error fetching products :', error);
        res.status(400).json({
            message: error.message
        })  
    }
})
app.get('/products/varieties', async (req, res) => {
    try {
        let snapshot = await varieties.get()
        let products = snapshot.docs.map(doc => doc.data())
        res.status(200).json(products)
    } catch (error) {
        console.log('Error fetching products :', error);
        res.status(400).json({
            message: error.message
        })  
    }
})





// FETCH THE SHOP PRODUCTS
app.get('/general/blogs', async (req, res) => {
    try {
        let snapshot = await blog.get()
        let products = snapshot.docs.map(doc => doc.data())
        res.status(200).json(products)
    } catch (error) {
        console.log('Error fetching products :', error);
        res.status(400).json({
            message: error.message
        })  
    }
})
































// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});