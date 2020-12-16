import { GetStaticPropsContext } from "next"
import { useRouter } from "next/dist/client/router"
import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import { format } from "date-fns"
import marked from "marked"

interface DayPageProps {
  day: string
  content: string
  frontMatter: {
    title: string
    description: string
    spoiler: string
    date: Date
  }
}

const DayPage = ({ day, content, frontMatter }: DayPageProps) => {
  const { query } = useRouter()

  return (
    <div>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <h1>Hello from day {query.day} page </h1>
      <p>slug is {day}</p>
      <pre>{content}</pre>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts")
  const paths = files.map((file) => ({ params: { day: file.replace(".md", "") } }))
  // console.log(paths)
  return {
    paths,
    fallback: true,
  }
}

type DayParamType = {
  day: string
}

// To get the content of the posts
export const getStaticProps = async ({ params }: GetStaticPropsContext<DayParamType>) => {
  const fallBackDay = params?.day ?? "day-1"
  const markDownWithMetaData = fs.readFileSync(
    path.join("posts", fallBackDay + ".md"),
    "utf8"
  )

  const parsedMarkDown = matter(markDownWithMetaData)

  return {
    props: {
      day: params?.day,
      content: parsedMarkDown.content,
      frontMatter: parsedMarkDown.data,
    },
  }
}
export default DayPage
