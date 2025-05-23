import { verifyToken } from '../../lib/auth';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const token = req.cookies.token;
  const data = verifyToken(token);
  if (!data) return res.status(401).json({});
  const user = await prisma.user.findUnique({ where: { id: data.id } });
  res.status(200).json({ id: user.id, username: user.username });
}
