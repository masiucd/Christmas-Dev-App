import { handleBlogPostDate } from "@utils/dates"
import React from "react"
import styled from "styled-components"
import Title from "@components/elements/title"
interface BlogPostProps {
  frontMatter: {
    title: string
    description: string
    spoiler: string
    date: string
  }
  rawHtml: string
}

const StyledBlogPost = styled.article`
  margin: 2rem auto;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0.5rem 0;
  }
`

const BlogPost: React.FC<BlogPostProps> = ({
  frontMatter: { date = "2021", title = "t", spoiler = "s" },
  rawHtml,
}) => {
  const d = handleBlogPostDate(date)

  return (
    <StyledBlogPost>
      <Title
        className={`blog-post blog-post-${title}`}
        mainTitle={title}
        subTitle={`${spoiler} written ${d}`}
      />
      <Content dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </StyledBlogPost>
  )
}
export default BlogPost
