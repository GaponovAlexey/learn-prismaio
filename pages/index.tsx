import Head from 'next/head'
import { useState } from 'react'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/')
  const data = await res.json()
  return {
    props: { data },
  }
}

const Home = ({data}) => {
  const { user } = data || {}
  const [email, setEmail] = useState()
  console.log(data)
  

  return (
    <div>
      <Head>
        <title>Learn</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div style={{ textAlign: 'center' }}>
        {/* {result && result?.map((el) => <div>{el.title}</div>)} */}
        <h1>Hello Next.js</h1>
        <input
          type='text'
          value={email}
          onChange={(el: any) => setEmail(el.target.value)}
        />
        <div>
          {user?.map((post) => (
            <div key={post.id}>
              <h1>{post.name}</h1>
              <p>{post.email}</p>
            </div>
          ))}

          <button>create</button>
        </div>
      </div>
    </div>
  )
}

export default Home
