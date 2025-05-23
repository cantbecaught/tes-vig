import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { verifyToken } from '@/lib/auth';

export default async function handler(req, res) {
  await dbConnect();

  const token = req.cookies.token;
  const data = verifyToken(token);
  if (!data) return res.status(401).json({});

  const user = await User.findById(data.id).select('_id username');
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.status(200).json({ id: user._id, username: user.username });
}
