import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'

const posts = [
  { slug: 'what-is-fi', title: 'What is Financial Independence (FI)?' },
  { slug: '4-percent-rule', title: 'The 4% Rule: Pros, Cons & Nuances' }
]

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog — Profiro</title>
      </Head>
      <Nav />
      <main className="container">
        <h1>Blog</h1>
        <ul className="blog-list">
          {posts.map(p => (
            <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
          ))}
        </ul>
        <p><em>Add new posts by creating files under <code>/pages/blog/[slug].js</code>.</em></p>
      </main>
      <footer className="footer container">
        © {new Date().getFullYear()} Profiro. All rights reserved.
      </footer>
    </>
  )
}
