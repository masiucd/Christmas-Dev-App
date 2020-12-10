import { useRouter } from "next/dist/client/router"
import React from "react"

interface DayPageProps {}

const DayPage: React.FC<DayPageProps> = ({}) => {
  const { query } = useRouter()

  console.log(query)

  return <h1>Hello from day {query.day} page</h1>
}
export default DayPage
