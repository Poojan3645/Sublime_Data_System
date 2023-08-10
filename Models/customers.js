const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const customerSchema = new mongoose.Schema({
  First_name: {
    type: String,
    required: [true, "First name is Required"],
  },
  Last_name: {
    type: String,
    required: [true, "Last Name Is Required"],
  },
  City: {
    type: String,
  },
  Company: {
    type: String,
  },
});

customerSchema.plugin(mongoosePaginate);
const Customers = new mongoose.model("Customers", customerSchema);
module.exports = Customers;
