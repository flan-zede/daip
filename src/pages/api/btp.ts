import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;
  switch (req.method) {
    case 'GET': {
      const prisma = new PrismaClient();
      if (id === null || id === undefined) {
        const btps = await prisma.btp.findMany();
        return res.send(btps);
      }
      else {
        const parseId = parseInt(id.toString());
        if (isNaN(parseId)) return res.status(400).end();
        else {
          const btp = await prisma.btp.findUnique({ where: { id: parseId } });
          return btp ? res.status(200).send(btp) : res.status(200).send({});
        }
      }
    }
    case 'POST': {
      const prisma = new PrismaClient();
      if (id === null || id === undefined) {
        const data = req.body;
        const meetup = await prisma.btp.create({ data });
        return res.status(201).json(meetup);
      }
    }
    default: {
      res.status(200).json({ name: 'Method not allow' }); break;
    }
  }
}
