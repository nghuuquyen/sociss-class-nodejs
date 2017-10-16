/**
* @author Quyen Nguyen Huu
* @module routes
* @name   author.server.routes
*/
"user strict";

let router = require('express').Router();
let AuthorCtrl = require('../controllers').Author;

// Resolve route params
router.param('author', AuthorCtrl.findOne);

// Public routes
router.route('/author/:author').get(AuthorCtrl.renderAuthorPage);
router.route('/author/:author/posts').get(AuthorCtrl.renderAuthorPostsPage);

module.exports = router;
