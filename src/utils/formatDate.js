const months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "June",
  "July",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec.",
]

export default function formatDate(date_to_format) {
  const date = new Date(date_to_format)

  const month = months[date.getUTCMonth()]
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()

  const hour = date.getUTCHours()
  const minute = date.getUTCMinutes()

  return { day, month, year, hour, minute }
}
