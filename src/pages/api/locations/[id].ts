import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongodb';
import Location from '../../../models/Location';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'PUT':
      try {
        const { name, image, SubLocations } = req.body;

        // Find the location by id and update it
        const updatedLocation = await Location.findByIdAndUpdate(
          id,
          { name, image, SubLocations },
          { new: true }
        );

        if (!updatedLocation) {
          return res.status(404).json({ message: 'Location not found' });
        }

        return res.status(200).json({ message: 'Location updated successfully', location: updatedLocation });
      } catch (error) {
        return res.status(500).json({ message: 'Error updating location', error });
      }

    case 'DELETE':
      try {
        // Find the location by id and delete it
        const deletedLocation = await Location.findByIdAndDelete(id);

        if (!deletedLocation) {
          return res.status(404).json({ message: 'Location not found' });
        }

        return res.status(200).json({ message: 'Location deleted successfully' });
      } catch (error) {
        return res.status(500).json({ message: 'Error deleting location', error });
      }

    default:
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
