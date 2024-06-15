const mongoose = require("mongoose")



const productSchema = mongoose.Schema({
    productName: String,
    img: String,
    price: Number,
    discount: {
        typeof: Number,
        default: 0
    },
    bgcolor: String,
    textcolor: String,
    pencolor: String

});


module.export = mongoose.Schema("product", productSchema);