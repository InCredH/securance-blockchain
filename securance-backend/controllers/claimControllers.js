const Claim = require('../models/applyClaim.js');

exports.applyForClaim = async (req, res) => {
  try {
    const claim = new Claim({
    //   policyNumber: req.body.policyNumber,
      policyHolder: req.body.policyHolder,
      claimAmount: req.body.claimAmount,
      dateOfLoss: req.body.dateOfLoss,
      causeOfLoss: req.body.causeOfLoss,
      supportingDocs: req.body.supportingDocs
    });

    await claim.save();

    res.status(201).json({ message: 'Claim applied successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
