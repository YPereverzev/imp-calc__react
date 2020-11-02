const router = require('express').Router();
const mocks = require('./mock');

const reply = (res, body, timeout = 1300, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

router.get('/ allExporters', function (req, res, next) {
  reply(res, mocks. allExporters);
});

router.get('/normalizedProducts', function (req, res, next) {
  const id = req.query.id;
  let result = mocks.normalizedProducts;
  if (id) {
    const  allExporters = mocks. allExporters.find(function (r) {
      return r.id === id;
    });
    if ( allExporters) {
      result =  allExporters.menu.map(function (productId) {
        return mocks.products.find(function (product) {
          return product.id === productId;
        });
      });
    }
  }
  reply(res, result);
});

router.get('/normalizedExperience', function (req, res, next) {
  const id = req.query.id;
  let result = mocks.normalizedExperience;
  if (id) {
    const  allExporters = mocks. allExporterss.find(function (r) {
      return r.id === id;
    });
    if ( allExporters) {
      result =  allExporters.reviews.map(function (reviewId) {
        return mocks.reviews.find(function (review) {
          return review.id === reviewId;
        });
      });
    }
  }
  reply(res, result);
});

router.get('/normalizedUsers', function (req, res, next) {
  reply(res, mocks.normalizedUsers);
});

const min = (m) => `you ordered for $${m}, but the minimum order amount is $50`;
const max = (m) =>
  `you ordered for $${m}, but the maximum order amount is $200`;

router.post('/order', function (req, res, next) {
  try {
    const total = req.body
      .map(
        ({ id, amount }) =>
          mocks.products.find((product) => product.id === id).price * amount
      )
      .reduce((acc, next) => acc + next, 0);

    if (total < 50) return reply(res, min(total), 3000, 400);
    if (total > 200) return reply(res, max(total), 3000, 400);
    return reply(res, 'ok', 3000);
  } catch {
    return reply(res, 'wrong data', 1000, 400);
  }
});

module.exports = router;