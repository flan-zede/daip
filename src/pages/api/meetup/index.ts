import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const prisma = new PrismaClient();
  switch (req.method) {
    case 'GET': {
      const btps = await prisma.btp.findMany();
      return res.send(btps);
    }
    case 'POST': {
      const data = req.body;
      //const { title, image, address, description } = data;
      console.log(data);
      const meetup = await prisma.btp.create({ data });
      return res.status(201).json(meetup);
    }
    case 'PUT': {
      break;
    }
    default: {
      res.status(200).json({ name: 'Method not allow' })
      break;
    }
  }
}
