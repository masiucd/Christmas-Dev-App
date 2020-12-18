import { handleBlogPostDate } from "@utils/dates"
import React from "react"
import styled from "styled-components"

interface BlogPostProps {
  frontMatter: {
    title: string
    description: string
    spoiler: string
    date: string
  }
  rawHtml: string
}

const StyledBlogPost = styled.div``

const BlogPost: React.FC<BlogPostProps> = ({ frontMatter, rawHtml }) => {
  const d = handleBlogPostDate(frontMatter.date)
  return (
    <StyledBlogPost>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </StyledBlogPost>
  )
}
export default BlogPost
