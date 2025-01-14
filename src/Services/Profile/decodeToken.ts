import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // This must match the key used to sign the token

// Function to verify and decode the token
export function decodeToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if(!decoded){
      alert('No Decoded Data !');
    }
    console.log('Decoded Token:', decoded);
    return decoded;
  } catch (error) {
    // Narrow the error type to ensure safe access to properties
    if (error instanceof Error) {
      console.error('Token verification failed:', error.message);
    } else {
      console.error('An unknown error occurred during token verification.');
    }
    return null;
  }
}
