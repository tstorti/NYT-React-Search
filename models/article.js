// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
// title is a required string
    id: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    // link is a required string
    snippet: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
