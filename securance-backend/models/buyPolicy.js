const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  policyHolder: {
    type: String,
    required: true
  },
  policyType: {
    type: String,
    required: true
  },
  premiumAmount: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Expired', 'Cancelled'],
    default: 'Active'
  }
}, {
  timestamps: true
});

const buyPolicy = mongoose.model('buyPolicy', policySchema);

module.exports = buyPolicy;
