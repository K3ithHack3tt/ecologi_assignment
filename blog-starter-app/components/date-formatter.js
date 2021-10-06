import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time cy-data='blog-date' dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
