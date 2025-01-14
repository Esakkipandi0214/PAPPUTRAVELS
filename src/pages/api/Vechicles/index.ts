import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongodb';
import Location from '../../../models/Location';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { name, image, SubLocations } = req.body;

        const newLocation = new Location({ name, image, SubLocations });
        await newLocation.save();

        return res.status(201).json({ message: 'Location created successfully', location: newLocation });
      } catch (error) {
        return res.status(500).json({ message: 'Error creating location', error });
      }

    case 'GET':
      try {
        const locations = await Location.find();
        return res.status(200).json(locations);
      } catch (error) {
        return res.status(500).json({ message: 'Error fetching locations', error });
      }

    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
