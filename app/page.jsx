"use client";
import TopicsList from '@/components/TopicsList'
import dynamic from "next/dynamic";
import { Suspense } from 'react'

const Home = () => {
  return (
    <>
    <Suspense fallback={<p>Loading Topics...</p>}>
      <TopicsList/>
    </Suspense>
    </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
