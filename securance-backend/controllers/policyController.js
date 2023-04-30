const Policy = require('../models/buyPolicy.js');

exports.buyPolicy = async (req, res) => {
  try {
    const {
    //   policyNumber,
      policyHolder,
      policyType,
      premiumAmount,
      startDate,
      endDate
    } = req.body;

    const policy = new Policy({
    //   policyNumber,
      policyHolder,
      policyType,
      premiumAmount,
      startDate,
      endDate
    });

    await policy.save();

    res.status(201).json({ message: 'Policy created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
