import prisma from "../DB/db.config.js";

//* To get all Post data
export const fetchPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      Comment: {
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      // id: "asc",
      id: "desc",
    },
  });

  return res.status(200).json({
    data: posts,
  });
};

//* Fetch particular Post according conditions

export const showPost = async (req, res) => {
  const postId = req.params.id;

  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
    },
  });

  return res.status(200).json({
    data: post,
  });
};

export const createPost = async (req, res) => {
  const { user_id, title, description } = req.body;

  const newPost = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });

  return res.status(200).json({
    data: newPost,
    message: "Post Created Successfully.",
  });
};

//* Update the Post

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { user_id, title, description } = req.body;

  await prisma.post.update({
    where: {
      //* The id will get from the user is in string form we have need to convert it into Number
      id: Number(postId),
    },
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });
  return res.status(200).json({
    message: "Post Updated Successfully",
  });
};

//* Delete The Post

export const deletePost = async (req, res) => {
  const postId = req.params.id;

  await prisma.post.deleteMany({
    where: {
      id: Number(postId),
    },
  });

  return res.status(200).json({
    message: "Post Deleted Successfully",
  });
};
