export const formatToVND = (amount) => {
  return new Intl.NumberFormat().format(amount)
}