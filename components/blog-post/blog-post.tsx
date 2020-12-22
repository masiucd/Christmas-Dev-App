import { handleBlogPostDate } from "@utils/dates"
import React from "react"
import styled from "styled-components"
import Title from "@components/title"
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

const BlogPost: React.FC<BlogPostProps> = ({ frontMatter, rawHtml }) => {
  const d = handleBlogPostDate(frontMatter.date)

  return (
    <StyledBlogPost>
      <Title
        className={`blog-post blog-post-${frontMatter.title}`}
        mainTitle={frontMatter.title}
        subTitle={`${frontMatter.spoiler} written ${d}`}
      />
      <Content dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </StyledBlogPost>
  )
}
export default BlogPost
