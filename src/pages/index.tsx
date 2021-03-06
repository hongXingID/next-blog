import Link from '../components/Link'
// import { PageSEO } from '@/components/SEO'
// import Tag from '@/components/Tag'

// import { getAllFilesFrontMatter } from '@/lib/mdx'
// import formatDate from '@/lib/utils/formatDate'

// import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

type postsType = {
  slug: string,
  date: string,
  title: string,
  summary: string,
  tags: string[],
  draft:boolean
}
interface Iprop {
  posts: postsType[]
}

export async function getStaticProps() {
  const posts: postsType[] = [{
    title: 'Sample .md file',
    date: '2016-03-08T00:00:00.000Z',
    tags: ['markdown', 'code', 'features'],
    draft: false,
    summary: 'Example of a markdown file with code blocks and syntax highlighting',
    slug: 'code-sample'
  },
  {
    title: 'Sample .md file',
    date: '2016-03-08T00:00:00.000Z',
    tags: ['markdown', 'code', 'features'],
    draft: false,
    summary: 'Example of a markdown file with code blocks and syntax highlighting',
    slug: 'code-sample'
  },
  {
    title: 'Sample .md file',
    date: '2016-03-08T00:00:00.000Z',
    tags: ['markdown', 'code', 'features'],
    draft: false,
    summary: 'Example of a markdown file with code blocks and syntax highlighting',
    slug: 'code-sample'
  },
  {
    title: 'Sample .md file',
    date: '2016-03-08T00:00:00.000Z',
    tags: ['markdown', 'code', 'features'],
    draft: false,
    summary: 'Example of a markdown file with code blocks and syntax highlighting',
    slug: 'code-sample'
  },
  {
    title: 'Sample .md file',
    date: '2016-03-08T00:00:00.000Z',
    tags: ['markdown', 'code', 'features'],
    draft: false,
    summary: 'Example of a markdown file with code blocks and syntax highlighting',
    slug: 'code-sample'
  }
]

  return { props: { posts } }
}

const Home: React.FC<Iprop> = ({ posts }) => {
  return (
    <>
      {/* <PageSEO title={siteMetadata.title} description={siteMetadata.description} /> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            welcome
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            ???????????????????????????
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && <div className='my-5 text-lg text-gray-600 dark:text-gray-100'>??????????????????</div>}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        {date}
                        {/* <time dateTime={date}>{formatDate(date)}</time> */}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                             <div>2</div>
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {(
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}

export default Home
