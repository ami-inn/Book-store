import express from 'express'
import { deleteBook, editBook, getAllBooks, uploadBook }  from '../controllers/bookController.js'

const bookRouter = express.Router()

bookRouter.post('/add-book',uploadBook)
bookRouter.get('/get-books',getAllBooks)
bookRouter.put('/edit-book/:id',editBook)
bookRouter.delete('/delete-book/:id',deleteBook)


export default bookRouter