const routes = require('express').Router()
const notecntrl = require('../controller/noteCntrl')
const auth = require('../middleware/auth')
routes.route('/')
    .get(auth,notecntrl.getNotes)
    .post(auth,notecntrl.createNote)

routes.route('/:id')
    .get(auth, notecntrl.getNote)
    .put(auth, notecntrl.updateNote)
    .delete(auth, notecntrl.deleteNote)

module.exports = routes