import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ['query'] })
  const user = await prisma.user.findMany()

  try {
    const { email, name } = req.body
    const sixes = await prisma.user.create({
      data: {
        email: email,
        name: name,
      },
    })
    res.status(200).json({ sixes })

    if (!sixes) {
      res.status(404).json({ error: 'User not found' })
    }

    res.status(201).json({ sixes })
  } catch (error) {
    res.status(500)
    res.json({ error: error.message })
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
