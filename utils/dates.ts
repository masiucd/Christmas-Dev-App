import { format } from "date-fns"

const handleBlogPostDate = (date: string, dateFormat = "MM/dd/yyyy"): string => {
  const [year, month, dayDate] = date.split("T")[0].split(" ").join("").split("-")

  return format(new Date(Number(year), Number(month), Number(dayDate)), dateFormat)
}

export { handleBlogPostDate }
