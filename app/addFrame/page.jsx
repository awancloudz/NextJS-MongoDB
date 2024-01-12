"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic(){
    const [cabang, setCabang] = useState("");
    const [barcode, setBarcode] = useState("");
    const [jumlah, setJumlah] = useState("1");
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();        
        try {
            const res = await fetch("/api/frames",{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({cabang, barcode, jumlah}),
            });

            if(res.ok){
                alert("Simpan Data Sukses!");
                setBarcode("");
                setJumlah(1);
                router.push("/addFrame");
                router.refresh();
            }
            else{
                throw new Error("Failed to create a data")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
            {/* <input
            onChange={(e) => setCabang(e.target.value)}
            value={cabang} 
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Cabang"/> */}
            <select 
            onChange={(e) => setCabang(e.target.value)}
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
            onChange={(e) => setBarcode(e.target.value)}
            value={barcode} 
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Barcode"/>
            <input 
            onChange={(e) => setJumlah(e.target.value)}
            value={jumlah} 
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Jumlah"/>
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Save</button>
        </form>
        </>
    )
}