/* eslint-disable import/no-extraneous-dependencies */
const proxy = require('http-proxy-middleware');
module.exports = function setupProxy(app) {
  app.use(proxy('/api/v1', { target: 'http://localhost:5000/', xfwd: true }));
};
// https://hackernoon.com/overview-of-proxy-server-and-how-we-use-them-in-react-bf67c062b929
