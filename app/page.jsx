"use client";
import TopicsList from '@/components/TopicsList'
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <>
    <TopicsList/>
    </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
