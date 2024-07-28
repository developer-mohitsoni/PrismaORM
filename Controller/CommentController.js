import prisma from "../DB/db.config.js";

//* To get all Comment data
export const fetchComment = async (req, res) => {
  const comments = await prisma.comment.findMany({
    include: {
      user: true,
      post: {
        include: {
          user: true,
        },
      },
    },
  });

  return res.status(200).json({
    data: comments,
  });
};

//* Fetch particular Comment according conditions

export const showComment = async (req, res) => {
  const commentId = req.params.id;

  const comment = await prisma.comment.findFirst({
    where: {
      id: Number(commentId),
    },
  });

  return res.status(200).json({
    data: comment,
  });
};

export const createComment = async (req, res) => {
  const { user_id, post_id, comment } = req.body;

  //* Increase the comment counter of Post if Comment is created

  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        increment: 1,
      },
    },
  });

  const newComment = await prisma.comment.create({
    data: {
      user_id: Number(user_id),
      post_id: Number(post_id),
      comment,
    },
  });

  return res.status(200).json({
    data: newComment,
    message: "Comment Created Successfully.",
  });
};

//* Update the Comment

export const updateComment = async (req, res) => {
  const commentId = req.params.id;
  const { user_id, post_id, comment } = req.body;

  await prisma.comment.update({
    where: {
      //* The id will get from the user is in string form we have need to convert it into Number
      id: Number(commentId),
    },
    data: {
      user_id: Number(user_id),
      post_id: Number(post_id),
      comment,
    },
  });
  return res.status(200).json({
    message: "Comment Updated Successfully",
  });
};

//* Delete The Post

export const deleteComment = async (req, res) => {
  const commentId = req.params.id;

  //* Delete the comment counter of Post if comment is deleted

  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        decrement: 1,
      },
    },
  });

  await prisma.comment.deleteMany({
    where: {
      id: Number(commentId),
    },
  });

  return res.status(200).json({
    message: "Comment Deleted Successfully",
  });
};
