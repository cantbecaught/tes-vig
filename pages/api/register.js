import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  await dbConnect()
  const { username, password } = req.body

  const existing = await User.findOne({ username })
  if (existing) return res.status(409).json({ message: 'User already exists' })

  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ username, password: hashed })
  res.status(201).json({ success: true, user: user._id })
}
