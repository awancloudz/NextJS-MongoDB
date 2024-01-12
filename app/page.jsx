"use client";
import FrameList from '@/components/FrameList';
import TopicsList from '@/components/TopicsList'
import dynamic from "next/dynamic";
import { Suspense } from 'react'

const Home = () => {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      {/* <TopicsList/> */}
      <FrameList/>
    </Suspense>
    </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
