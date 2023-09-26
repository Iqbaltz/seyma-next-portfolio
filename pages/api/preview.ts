import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query;
  res.setDraftMode({ enable: true });
  switch (type) {
    default:
      res.writeHead(307, { Location: "/" });
  }
  res.end();
}
