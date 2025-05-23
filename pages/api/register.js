import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { username, password } = req.body;
  const exists = await prisma.user.findUnique({ where: { username } });
  if (exists) return res.status(400).json({ message: 'Username exists' });
  const hash = await bcrypt.hash(password, 10);
  await prisma.user.create({ data: { username, password: hash } });
  res.status(200).json({ message: 'Registered' });
}
