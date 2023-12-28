import Image from 'next/image'
import Hero from './(components)/hero'
import TopStories from './(components)/top-stories'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <TopStories/>
    </main>
  )
}
