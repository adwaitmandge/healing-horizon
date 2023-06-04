const { Admin } = require("./models/adminModel");

const insertUser = async () => {
  const admin = await Admin.create({
    email: "adwaitmandge@gmail.com",
    password: "yashavardhan04",
  });

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};

insertUser();
