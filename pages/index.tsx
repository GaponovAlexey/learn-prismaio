import Head from 'next/head'
import { useEffect, useState } from 'react'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/')
  const data = await res.json()
  return {
    props: { data },
  }
}

const Home = ({ data }) => {
  const { user } = data || []
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const sendserver = async () => {
    await fetch('http://localhost:3000/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
    setEmail('')
    setName('')
  }

  return (
    <div>
      <Head>
        <title>Learn</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div style={{ textAlign: 'center' }}>
        <h1>Hello Next.js | ts</h1>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={email}
          onChange={(el: any) => setEmail(el.target.value)}
        />
        <button onClick={sendserver}>create@</button>
        <div>
          {user?.map((post) => (
            <div key={post.id}>
              <h1>{post.name}</h1>
              <p>{post.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
