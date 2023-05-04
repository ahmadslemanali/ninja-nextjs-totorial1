import React from 'react'

const User = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.website}</p>
      <p>{ninja.email}</p>
      <p>{ninja.address.city}</p>

      {/* Add any other user details here */}
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(ninja => ({
    params: { id: ninja.id.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const ninja = await res.json()

  return { props: { ninja } }
}

export default User

//CHAT GPT 3.5