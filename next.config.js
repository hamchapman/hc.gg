const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? 'd3ts6yifqfl9ka.cloudfront.net' : ''
};
