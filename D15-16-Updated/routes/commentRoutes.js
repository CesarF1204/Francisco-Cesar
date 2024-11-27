import express from 'express';
import { addComment, getCommentsByBlog, deleteComment } from '../controllers/commentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('/:id', authMiddleware, addComment);
router.get('/:id', getCommentsByBlog);
router.delete('/:blogId/:id', authMiddleware, deleteComment);

export default router;