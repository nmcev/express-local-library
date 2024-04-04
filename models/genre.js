const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Genre = new Schema({
    name: {type: String, require: true, maxLength: 100, minLength: 3}
})

Genre.virtual('url').get(function () {
    return `/catalog/genre/${this.id}`
})

module.exports = mongoose.model("Genre", Genre)