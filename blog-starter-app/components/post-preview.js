import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
          cy-data="post-preview-image"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline" cy-data="post-preview-link">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4" cy-data="post-preview-date">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4" cy-data="post-preview-excerpt">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
