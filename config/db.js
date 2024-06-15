const mongoose = require("mongoose");
const config = require("config");
const dbugger = require("debug")("development:mongoose");

function connectdb() {
    try {
        // Retrieve the MongoDB URL from configuration
        const mongodbUrl = config.get("MONGODB_URL");

        // Check if the MongoDB URL is valid
        if (!mongodbUrl) {
            throw new Error("MongoDB URL is not specified in the configuration.");
        }

        // Attempt to connect to the MongoDB database
        mongoose.connect(`${mongodbUrl}`)
            .then(function () {
                dbugger("connected to db.");
            })
            .catch(function (error) {
                dbugger("Error connecting to MongoDB:", error.message);
            });
    } catch (error) {
        // Handle any errors that occur during the connection attempt
        dbugger("Error connecting to MongoDB:", error.message);
    }
}

module.exports = connectdb;





// module.exports = connectdb;

