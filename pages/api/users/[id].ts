import { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from '../../../services/getUser';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = _req.query;

    const data = await getUser(id);

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler