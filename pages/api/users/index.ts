import { NextApiRequest, NextApiResponse } from 'next'
import { getUsers } from '../../../services/getUsers'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getUsers();

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
