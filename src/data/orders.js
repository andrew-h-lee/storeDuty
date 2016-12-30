import moment from 'moment';

const ORDERS_DATA = [
  {
    reference: 'ATX360Z',
    customer: 'Steve Austin',
    orderedAt: moment("2016-12-18T17:14:00.000Z"),
    products: [
      { name: 'Black Vest', amount: 120.25 },
      { name: 'Gray Skull Shirt', amount: 50.50 }
    ],
    amount: 170.75,
    paymentStatus: 'authorized',
    orderStatus: 'open'
  },
  {
    reference: 'CNR48W',
    customer: 'Ric Flair',
    orderedAt: moment("2016-12-18T17:08:00.000Z"),
    products: [
      { name: 'Blue Robe', amount: 229.75 }
    ],
    amount: 229.75,
    paymentStatus: 'authorized',
    orderStatus: 'open'
  },
  {
    reference: 'HTM32C',
    customer: 'Bret Hart',
    orderedAt: moment("2016-12-18T16:17:00.000Z"),
    products: [
      { name: 'Pink & Black Shirt', amount: 45.50 }
    ],
    amount: 45.50,
    paymentStatus: 'settled',
    orderStatus: 'open'
  },
  {
    reference: 'UKA78T',
    customer: 'The Undertaker',
    orderedAt: moment("2016-12-18T15:49:00.000Z"),
    products: [
      { name: 'Black Hat', amount: 65.50 },
      { name: 'Black Leather Trenchcoat', amount: 250.50 }
    ],
    amount: 316.00,
    paymentStatus: 'settled',
    orderStatus: 'shipped'
  }
];

export default ORDERS_DATA;
