"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({id, cabang, barcode, jumlah}){
    const [newCabang, setNewCabang] = useState(cabang);
    const [newBarcode, setNewBarcode] = useState(barcode);
    const [newJumlah, setNewJumlah] = useState(jumlah);
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await fetch(`/api/products/${id}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newCabang, newBarcode, newJumlah}),
            })
            if(res.ok){
                router.push("/");
                router.refresh();
            }
            else{
                throw new Error("Failed to update a product")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
            <select 
            onChange={(e) => setNewCabang(e.target.value)}
            value={cabang} 
            className="border border-slate-500 px-8 py-2">
                <option value="">-Pilih Cabang-</option>
                <option value="Tembalang">Tembalang</option>
                <option value="Ungaran">Ungaran</option>
                <option value="Ngaliyan">Ngaliyan</option>
                <option value="Jatisari">Jatisari</option>
                <option value="Tegal">Tegal</option>
            </select>           
            <input 
            onChange={(e) => setNewBarcode(e.target.value)}
            value={newBarcode} 
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Barcode"/>
            <input 
            onChange={(e) => setNewJumlah(e.target.value)}
            value={newJumlah} 
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Jumlah"/>
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Product</button>
        </form>
        </>
    )
}