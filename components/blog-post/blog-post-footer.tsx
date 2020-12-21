import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface BlogPostFooterProps {
  lastPostIndex: number
  currentPostIndex: number
  postsList: string[]
}

const StyledFooter = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  a {
    cursor: pointer;
    display: block;
    text-align: center;
    width: 40%;
  }
`

const BlogPostFooter: React.FC<BlogPostFooterProps> = ({
  lastPostIndex,
  currentPostIndex,
  postsList,
}) => {
  return (
    <StyledFooter>
      {currentPostIndex > 0 && (
        <Link href={`/post/${postsList[currentPostIndex - 1]}`}>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            style={{ marginRight: currentPostIndex === lastPostIndex ? "auto" : "" }}
          >
            &#8592; Prev
          </motion.a>
        </Link>
      )}

      {lastPostIndex !== currentPostIndex && (
        <Link href={`/post/${postsList[currentPostIndex + 1]}`}>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            style={{
              marginLeft: currentPostIndex === 0 ? "auto" : "",
            }}
          >
            Next &#8594;
          </motion.a>
        </Link>
      )}
    </StyledFooter>
  )
}
export default BlogPostFooter
