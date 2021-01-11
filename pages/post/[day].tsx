import { GetStaticPropsContext } from "next"
import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import markdownToHtml from "@utils/markDownToHtml"
import BlogPost from "@components/blog-post/blog-post"
import BlogPostFooter from "@components/blog-post/blog-post-footer"
interface DayPageProps {
  day: string
  postsList: string[]
  frontMatter: {
    title: string
    description: string
    spoiler: string
    date: string
  }
  rawHtml: string
}

const DayPage = ({ frontMatter, rawHtml, postsList, day }: DayPageProps) => {
  const currentPostIndex = postsList.indexOf(day)
  const lastPostIndex = postsList.length - 1
  console.log(currentPostIndex)

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <BlogPost frontMatter={frontMatter} rawHtml={rawHtml} />
      <BlogPostFooter
        postsList={postsList}
        currentPostIndex={currentPostIndex}
        lastPostIndex={lastPostIndex}
      />
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts")
  const paths = files.map((file) => ({ params: { day: file.replace(".md", "") } }))
  // params will we receive from `getStaticProps`
  // notice that day has the match with name of the file

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
  const postsList = fs.readdirSync("posts").map((post) => post.replace(".md", ""))

  const parsedMarkDown = matter(markDownWithMetaData)

  return {
    props: {
      day: params?.day,
      frontMatter: parsedMarkDown.data,
      rawHtml: await markdownToHtml(parsedMarkDown.content),
      postsList,
    },
  }
}
export default DayPage
