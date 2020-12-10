const calculateDaysUntilXmas = (): number => {
  const today = new Date()
  const cmas = new Date(today.getFullYear(), 11, 24)

  if (today.getMonth() === 11 && today.getDate() > 24) {
    cmas.setFullYear(cmas.getFullYear() + 1)
  }
  const oneDay = 1000 * 60 * 60 * 24

  return Math.ceil((cmas.getTime() - today.getTime()) / oneDay)
}

export { calculateDaysUntilXmas }
