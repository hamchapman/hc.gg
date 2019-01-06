const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  target: 'serverless',
  assetPrefix: isProd ? 'd3ts6yifqfl9ka.cloudfront.net' : ''
};
