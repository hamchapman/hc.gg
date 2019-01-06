const posts = require('../../posts.json');

module.exports = (req, res) => {
  res.end(posts);
};
