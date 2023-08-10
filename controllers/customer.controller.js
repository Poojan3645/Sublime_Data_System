const { json } = require("stream/consumers");
const Customers = require("../Models/customers");

exports.createCustomer = async (req, res) => {
  try {
    const { First_name, Last_name, City, Company } = req.body;

    const Customer = new Customers({
      First_name,
      Last_name,
      City,
      Company,
    });
    const result = await Customer.save();
    res.send(result);
  } catch (error) {
    console.log(err);
    res.status(501).json({ message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const _id = req.params.custId;
    const result = await Customers.findOne({ _id });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: error.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const { searchValue } = req.query;

    let searchQuery = {};
    if (searchValue) {
      searchQuery = {};

      searchQuery = {
        $or: [
          {
            First_name: {
              $regex: searchValue,
              $options: "i",
            },
          },
          {
            Last_name: {
              $regex: searchValue,
              $options: "i",
            },
          },
          {
            City: {
              $regex: searchValue,
              $options: "i",
            },
          },
        ],
      };
    }

    const result = await Customers.paginate(searchQuery);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: error.message });
  }
};

exports.cityByCustomers = async (req, res) => {
  try {
    const cityCounts = await Customers.aggregate([
      { $group: { _id: "$City", count: { $sum: 1 } } },
      { $project: { _id: 0, City: "$_id", userCount: "$count" } },
    ]);

    res.send(cityCounts);
  } catch (error) {
    console.log("error", error.message);
    res.status(501).json({ message: error.message });
  }
};

exports.getDeleteCustomer = async (req, res) => {
  try {
    const _id = req.params.custId;

    const deletedResult = await Customers.deleteOne({ _id });
    res.send(deletedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};

exports.getUpdateCustomer = async (req, res) => {
  try {
    const _id = req.params.custId;
    const { First_name, Last_name, City, Company } = req.body;

    const update = {};

    if (First_name) update.First_name = First_name;
    if (Last_name) update.Last_name = Last_name;
    if (City) update.City = City;
    if (Company) update.Company = Company;

    const updatedResult = await Customers.findOneAndUpdate(
      { _id },
      {
        $set: update,
      },
      { new: true }
    );
    console.log("data was updated", updatedResult);
    res.send(updatedResult);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: error.message });
  }
};
