const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    orderItem: {
      type: [
        {
          randomId: { type: Number, required: true },
          image: { type: String, required: true },
          name: { type: String, required: true },
          isStock: { type: Boolean, required: true },
          price: { type: Number, required: true },
          quentity: { type: Number, required: true },
          size: { type: String, required: true },
          color: { type: String, required: true },
        },
      ],
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['pending', 'confirm', 'completed', 'cancelled'],
      default: 'pending',
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    method: {
      type: String,
      enum: ['cod', 'payOnline'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Order', orderSchema);
