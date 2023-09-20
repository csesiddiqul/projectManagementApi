import User from "../model/UserModel.js";

export const userall = async (req,res) => {
  try {
    // Use Mongoose to find all user documents
    const users = await User.find({});

    // Check if there are no users
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    // Send the user data as a JSON response
    res.json(users);
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching user data' });
  }

 };

export const userCrate = async (req, res) => {

    const {
        name,
        email,
        phone, 
        password, 
        profile_img,
        course_id,
        batch_id,
        type,
        active_status,
        email_verified_at,
        remember_token,
      } = req.body;
    try {
      const newUser = await User.create({
        name,
        email,
        phone, 
        password, 
        profile_img,
        course_id,
        batch_id,
        type,
        active_status,
        email_verified_at,
        remember_token,
        });
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      // Handle validation errors
      if (error.name === 'ValidationError') {
        const errors = {};
        for (let field in error.errors) {
          errors[field] = error.errors[field].message;
        }
        res.status(400).json({ errors });
      } else {
        // Handle other errors
        res.status(500).json({ message: 'An error occurred', error: error.message });
      }
    }
    
  }


  export const userUpate = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUserData = req.body;
  
      // Use Mongoose to find the user by ID and update it
      const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, {
        new: true, // Return the updated user document
      });
  
      // Check if the user with the given ID was not found
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found', data: null });
      }
  
      // Send the updated user data as a JSON response
      res.json({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
      // Handle any errors that occur during the database update
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating user data', data: null });
    }
  };





