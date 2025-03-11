import mongoose from 'mongoose'

const DocumentSchema = new mongoose.Schema({
    name: String,
    driveId: String,
})

export default mongoose.model('Document', DocumentSchema)