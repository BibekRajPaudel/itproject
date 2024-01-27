import Users from "../model/userModel.js"
import sendToken  from "../utils/jwtToken.js"
import ErrorHandler from "../utils/errorHandler.js"


// Register a User
export const registerUser =async (req, res, next) => {
  try {
    const { name, email, password,confirmpassword,phoneNumber } = req.body;
    const user = await Users.create({
      name,
      email,
      password,
      confirmpassword,
      phoneNumber
    });
  
    sendToken(user, 201, res);
  } catch (error) {
    console.log(error)
  }
 
};

// Login User
export const loginUser = async (req, res, next) => {
  try {
    console.log(req.body,"req.body")
    const { email, password } = req.body;

    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
  
    const user = await Users.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
    sendToken(user, 200, res);
  } catch (error) {
    console.log(error)
  }
 
};

// Logout User
export const logout = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    console.log(error)
  }
  
};

