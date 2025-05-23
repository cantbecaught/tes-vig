import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { signToken } from '../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  await dbConnect()
  const { username, password } = req.body

  const user = await User.findOne({ username })
  if (!user) return res.status(400).json({ message: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Wrong password' });

  const token = signToken(user);
  res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly`);
  res.status(200).json({ message: 'Logged in' });
}
