const express = require('express');

const app = express();
const PORT = 3000;

//GET 
app.get('/items', async (req, res) => {
    try{

    } catch (error) {

})
//POST
app.post('/items', async (req, res) => {
    try {

    } catch (error) {

})

//GET by ID
app.get('/items/:id', async (req, res) => {
try {

} catch (error) {

})

//PUT by ID
app.put('/items/:id', asnyc (req, res) => {
    try {
}catch(error){

})

//DELETE by ID
app.delete('/items/:id', async (req, res) => {
    try {
}catch(error){

})

app.listen(PORT, () => {
    console.log(`Another One ${PORT}`)
}) 