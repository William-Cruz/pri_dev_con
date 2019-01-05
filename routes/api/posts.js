const express = require('express');
const router = express.Router();

// @route get api/posts/test
// @desc Test post route
// @access Public
router.get('/test', (req, res) => res.json({
  msg: 'Posts Works'
}));

module.exports = router;