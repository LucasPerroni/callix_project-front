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

  const hour = date.getUTCHours().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const minute = date.getUTCMinutes().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })

  return { day, month, year, hour, minute }
}
