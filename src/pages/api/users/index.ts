import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { username, email, password, role } = req.body;

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
        }

        // Create new user
        const user = new User({ username, email, password, role });
        await user.save();

        return res.status(201).json({ message: 'User created successfully', user });
      } catch (error) {
        return res.status(500).json({ message: 'Error creating user', error });
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
