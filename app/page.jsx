"use client";
import ProducList from '@/components/ProductList';
import TopicsList from '@/components/TopicsList'
import dynamic from "next/dynamic";
import { Suspense } from 'react'

const Home = () => {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      {/* <TopicsList/> */}
      <ProducList/>
    </Suspense>
    </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
