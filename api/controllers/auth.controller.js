import User from '../models/user.model.js'; 

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;




    if(!name || !email || !password ||!role || name==="" || email==="" ||password===""||role==="" ){
        return res.status(400).json({message:"all fields are required"});
    }
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
