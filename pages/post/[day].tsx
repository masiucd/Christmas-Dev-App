import { GetStaticPropsContext } from "next"
import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import markdownToHtml from "@utils/markDownToHtml"
import BlogPost from "@components/blog-post/blog-post"
import BlogPostFooter from "@components/blog-post/blog-post-footer"

interface FrontMatter {
  title: string
  description: string
  spoiler: string
  date: string
}
interface DayPageProps {
  day: string
  postsList: string[]
  frontMatter: FrontMatter
  rawHtml: string
}

const DayPage = ({ frontMatter, rawHtml, postsList, day }: DayPageProps) => {
  const currentPostIndex = day ? postsList.indexOf(day) : 0
  const lastPostIndex = postsList ? postsList.length - 1 : 0
  // * * without this line I can't build it for production
  // * * need to have a fallBack
  let fakeFrontMatter: FrontMatter
  if (!frontMatter) {
    fakeFrontMatter = {
      title: "",
      description: "",
      spoiler: "",
      date: "2020-02-04T22:40:32.169Z",
    }
  }

  return (
    <>
      <Head>
        <title>{frontMatter ? frontMatter.title : fakeFrontMatter.title}</title>
      </Head>
      <BlogPost
        frontMatter={frontMatter ? frontMatter : fakeFrontMatter}
        rawHtml={rawHtml}
      />
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
  const postsList = fs
    .readdirSync("posts")
    .map((post) => post.replace(".md", ""))
    .map((x) => x.split("-")[1])
    .map(Number)
    .sort((a, b) => a - b)
    .map((x) => "day-" + x)

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
