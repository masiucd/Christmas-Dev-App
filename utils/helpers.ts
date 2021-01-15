const calculateDaysUntilXmas = (): number => {
  const today = new Date()
  const cmas = new Date(today.getFullYear(), 11, 24)

  if (today.getMonth() === 11 && today.getDate() > 24) {
    cmas.setFullYear(cmas.getFullYear() + 1)
  }
  const oneDay = 1000 * 60 * 60 * 24

  return Math.ceil((cmas.getTime() - today.getTime()) / oneDay)
}

const randomListValue = <T>(xs: T[]): T => xs[Math.floor(Math.random() * xs.length)]

const matchPattern = (xs: string[], term: string) => {
  // some jibrish that will not match and array will be empty by default
  const searchTerm = term.length > 0 ? term : "#242341@@12"
  return xs.filter((x) => {
    const re = new RegExp(`${searchTerm}`, "ig")
    return x.match(re)
  })
}

const randomNumber = (n = 10): number => Math.floor(Math.random() * n)

export { calculateDaysUntilXmas, randomListValue, matchPattern, randomNumber }
