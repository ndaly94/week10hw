const express = require('express')
const mongoose = require('mongoose')
const fs = require('fs')

const app = express()
const Item = require('./models/item')


const PORT = 3000;

//GET 
app.get('/items', async (req, res) => {
    try{
        const foundItems = await Item.find({})
        res.render('items/index', {
            items: foundItems
        })
    } catch (error) {
        res.status(400).send({ message: error.message})

})
//POST
app.post('/items', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send({ message: error.message})

})

//NEW
app.get('/items/:id', async (req, res) => {
try {
    res.render('items/:id')
} catch (error) {
    res.status(400).send({ message: error.message})

})

//PUT by ID
app.put('/items/:id', async (req, res) => {
    try {
        await Item.findOneAndUpdate({'_id': req.params.id},
        req.body, { new: true })
        .the(() => {
            res.redirect(`/items/${req.params.id}`)
        })
}catch(error){
    res.status(400).send({ message: error.message})
})

//DELETE by ID
app.delete('/items/:id', async (req, res) => {
    try {
        await Item.findOneAndDelete({'_id': req.params.id})
        .then(() => {
            res.redirect('/items')
        })
}catch(error){
    res.status(400).send({ message: error.message})
})

app.listen(PORT, () => {
    console.log(`Another One ${PORT}`)
}) 