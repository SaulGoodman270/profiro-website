import Head from 'next/head'
import Nav from '../components/Nav'
import { useRouter } from 'next/router'

const content = {
  'what-is-fi': {
    title: 'What is Financial Independence (FI)?',
    body: `FI means your investments can cover your living expenses. Profiro helps you estimate your FI number,
    plan monthly contributions, and visualize your timeline so you can make informed decisions.`
  },
  '4-percent-rule': {
    title: 'The 4% Rule: Pros, Cons & Nuances',
    body: `The classic 4% rule is a starting point, not a guarantee. Consider fees, taxes, sequence of returns,
    and personal flexibility. Profiro lets you test different withdrawal rates and market assumptions.`
  }
}

export default function Post() {
  const { query } = useRouter()
  const slug = query.slug
  const post = content[slug] || { title: 'Post not found', body: 'This post does not exist yet.' }
  return (
    <>
      <Head><title>{post.title} — Profiro</title></Head>
      <Nav />
      <main className="container">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
      <footer className="footer container">© {new Date().getFullYear()} Profiro.</footer>
    </>
  )
}
