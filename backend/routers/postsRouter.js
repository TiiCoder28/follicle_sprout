const express = require('express');
const postController = require('../controllers/postController');
const { identifier } = require('../middlewares/identification');

const router = express.Router();

router.get('/all-posts', identifier, postController.getPosts);
// router.get('/single-post', indentifier, postController.getPost);
// router.post('/create-post', identifier, postController.createPost);            //identifier function checks whether user is logged in or not

// router.put('/update-post', identifier, postController.updatePost);
// router.delete('/delete-post', identifier, postController.deletPost);


module.exports = router;