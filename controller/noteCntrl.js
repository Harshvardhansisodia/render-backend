const Notes = require('../models/noteModels')

const notecntrl = {
    getNotes: async (req, res) =>{
        try {
            const notes = await Notes.find({user_id: req.user.id})
            res.json(notes)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createNote: async (req, res) =>{
        try {
            const {title, content, date} = req.body;
            const newNote = new Notes({
                title,
                content,
                date,
                user_id: req.user.id,
                name: req.user.name
            })
            res.json(newNote)
            await newNote.save()
        } catch (error) {
            return res.status(500).json({msg: error.message})
            
        }
    },
    deleteNote: async (req, res) =>{
        try {
            await Notes.findByIdAndDelete(req.params.id)
            res.json({msg:"Note is deleted"})
        } catch (error) {
            return res.status(500).json({msg: error.message})
            
        }
    },
    updateNote: async(req, res) =>{
        try {
            const {title, content, date} = req.body;
            await Notes.findOneAndUpdate({_id: req.params.id},{
                title,
                content,
                date
            })
            res.json({msg: "Updated a Note"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getNote: async(req, res) => {
        try {
            const note = await Notes.findById(req.params.id)
            res.json(note)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
module.exports = notecntrl