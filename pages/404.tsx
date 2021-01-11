import Title from "@components/elements/title"
import Link from "next/link"
export default function Custom404() {
  return (
    <>
      <Title
        dataTestID="404-title-component"
        className="404-title"
        mainTitle="404 - Page Not Found"
        subTitle="We will help you to go back"
      />
      <Link href="/">
        <a>😎 Back Home</a>
      </Link>
    </>
  )
}
