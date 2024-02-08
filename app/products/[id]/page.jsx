"use client";
import ProducList from '@/components/ProductList';
import TopicsList from '@/components/TopicsList'
import dynamic from "next/dynamic";
import { Suspense } from 'react'
import { useState, useEffect } from 'react'

const ProductCategories =({params}) => {
    const { id } = params;
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`/api/categories/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data.products)
        })
     }, [])
    
    return (
        <>
        <Suspense fallback={<p>Loading...</p>}>
        <p align='center'><b>Product List - {id}</b></p><hr/>
        <table width={"100%"}>
            <tr><th>Cabang</th><th>Jenis</th><th>Barcode</th><th>Jumlah</th></tr>
            {data && data.map((t, i) => {
                return ( 
                <tr align="center" key={i}><td>{t.cabang}</td><td>{t.jenisproduk}</td><td>{t.barcode}</td><td>{t.jumlah}</td>
                </tr>
                )
            })}
        </table>
        </Suspense>
        </>
    )
}

export default dynamic (() => Promise.resolve(ProductCategories), {ssr: false})
