const express = require("express");
const router = express("Router");

const customerController = require("../controllers/customer.controller");

router.get("/", customerController.getCustomers);
router.get("/cityByCustomers", customerController.cityByCustomers);
router.get("/:custId", customerController.getCustomerById);

router.post("/", customerController.createCustomer);

router.put("/:custId", customerController.getUpdateCustomer);

router.delete("/:custId", customerController.getDeleteCustomer);

module.exports = router;
