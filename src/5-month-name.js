const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber >= 1 && <= 12) {
    return months[monthNumber]
  } else {
    return null
  }
}

//om  index numret är mellan 0 och 11 så ska den ta visa det. annars null(hur visar den null?)