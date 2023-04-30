const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
  policyHolder: {
    type: String,
    required: true
  },
  claimAmount: {
    type: Number,
    required: true
  },
  dateOfLoss: {
    type: Date,
    required: true
  },
  causeOfLoss: {
    type: String,
    required: true
  },
  supportingDocs: {
    type: [String],
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

const Claim = mongoose.model('Claim', claimSchema);

module.exports = Claim;
