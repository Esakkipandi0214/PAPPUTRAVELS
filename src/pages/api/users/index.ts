import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/user';
 // Make sure to set a secret key in your environment

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { email, password, username, role } = req.body;

        // Check if it's user creation or login
        if (username && email && password && role) {
          // User creation logic
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
          }

          const user = new User({ username, email, password, role });
          await user.save();

          return res.status(201).json({ message: 'User created successfully', data:user });
        } else if (email && password) {
          // Login logic
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }

          const isPasswordValid = await user.comparePassword(password);
          if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }

          // Generate JWT
          // const token = jwt.sign(
          //   { id: user._id, email: user.email, role: user.role },
          //   JWT_SECRET,
          //   { expiresIn: '1h' }
          // );
          const data = { id: user._id, email: user.email,name:user.username, role: user.role }

          return res.status(200).json({ message: 'Login successful', data:data });
        } else {
          return res.status(400).json({ message: 'Missing required fields' });
        }
      } catch (error) {
        return res.status(500).json({ message: 'Error processing request', error });
      }

    case 'GET':
      try {
        const users = await User.find();
        return res.status(200).json(users);
      } catch (error) {
        return res.status(500).json({ message: 'Error fetching users', error });
      }

    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
