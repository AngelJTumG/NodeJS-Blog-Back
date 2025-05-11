import { Schema, model } from 'mongoose';

const commentSchema = Schema({
    postId: {
    type: Schema.Types.ObjectId,
    ref: 'Publicacion',
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

commentSchema.methods.toJSON = function () {
  const { _id, __v, ...comment } = this.toObject();
  comment.uid = _id;
  return comment;
}

export default model('Comment', commentSchema);