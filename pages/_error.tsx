import { NextApiResponse } from "next"

interface ErrorProps {
  statusCode: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  )
}

Error.getInitialProps = ({ res, err }: { res: NextApiResponse; err: ErrorProps }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
