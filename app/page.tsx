import Image from 'next/image'
import Hero from './(components)/hero'
import TopStories from './(components)/top-stories'
import Header from './(components)/header'

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Hero/>
      <TopStories/>
    </main>
  )
}
