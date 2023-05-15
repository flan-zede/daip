import { User, Post, Prisma, PrismaClient } from '@prisma/client'
import NextCrud, { PrismaAdapter } from '@premieroctet/next-crud'
import type { NextApiRequest, NextApiResponse } from 'next'

declare global { var prisma: PrismaClient | undefined }
const prisma = global.prisma || new PrismaClient({ log: ['query'] })
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const nextCrudHandler = await NextCrud({adapter: new PrismaAdapter<User | Post, Prisma.ModelName>({ prismaClient: prisma })})
  return nextCrudHandler(req, res)
}