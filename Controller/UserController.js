import prisma from "../DB/db.config.js";

//* To get all User data

export const onlyFetchUser = async(req,res)=>{
  const users = await prisma.user.findMany();

  return res.status(200).json({
    data: users,
  });
}

export const fetchUsers = async (req, res) => {
  //* Now this below include shows userData along with Post
  const users = await prisma.user.findMany({
    /*
    include: {
      Post: {
        select: {
          title: true,
          comment_count: true,
        },
      },
    },
    */
   
    //* To check the number of post,comment count by user
    select: {
      _count: {
        select: {
          Post: true,
          Comment: true,
        },
      },
    },
  });

  return res.status(200).json({
    data: users,
  });
};

//* Fetch particular User according conditions

export const showUser = async (req, res) => {
  const userId = req.params.id;

  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });

  return res.status(200).json({
    data: user,
  });
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.status(400).json({
      message: "Email Already Taken. Please use another email.",
    });
  }

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return res.status(200).json({
    data: newUser,
    message: "User Created Successfully.",
  });
};

//* Update the User

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  await prisma.user.update({
    where: {
      //* The id will get from the user is in string form we have need to convert it into Number
      id: Number(userId),
    },
    data: {
      name,
      email,
      password,
    },
  });
  return res.status(200).json({
    message: "User Updated Successfully",
  });
};

//* Delete The User

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  await prisma.user.deleteMany({
    where: {
      id: Number(userId),
    },
  });

  return res.status(200).json({
    message: "User Deleted Successfully",
  });
};
