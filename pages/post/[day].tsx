import { GetStaticPropsContext } from "next"
import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import markdownToHtml from "@utils/markDownToHtml"
import BlogPost from "@components/blog-post/blog-post"
interface DayPageProps {
  day: string
  frontMatter: {
    title: string
    description: string
    spoiler: string
    date: string
  }
  rawHtml: string
}

const DayPage = ({ frontMatter, rawHtml }: DayPageProps) => {
  return (
    <div>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <BlogPost frontMatter={frontMatter} rawHtml={rawHtml} />
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts")
  const paths = files.map((file) => ({ params: { day: file.replace(".md", "") } }))

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
      frontMatter: parsedMarkDown.data,
      rawHtml: await markdownToHtml(parsedMarkDown.content),
    },
  }
}
export default DayPage
