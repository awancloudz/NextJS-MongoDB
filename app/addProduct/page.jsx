"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic(){
    const [cabang, setCabang] = useState("");
    const [jenisproduk, setJenis] = useState("");
    const [barcode, setBarcode] = useState("");
    const [jumlah, setJumlah] = useState("1");
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        if(!cabang || !jenisproduk || !barcode || !jumlah){
            alert("Cabang/JenisProduk/Barcode/Jumlah Wajib Diisi!")
        }
        else{       
            try {
                const res = await fetch("/api/products",{
                    method: "POST",
                    cache: "no-store",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({cabang, jenisproduk, barcode, jumlah}),
                });

                if(res.ok){
                    alert("Simpan Data Sukses!", res);
                    setBarcode("");
                    setJumlah(1);
                    const nextfield = document.querySelector(
                        `input[name="barcode"]`
                    );
                    nextfield.focus();
                    // router.push("/addFrame");
                    // router.refresh();
                }
                else{
                    throw new Error("Failed to create a data")
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
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
            <select 
            onChange={(e) => setJenis(e.target.value)}
            value={jenisproduk} 
            className="border border-slate-500 px-8 py-2">
                <option value="">-Pilih Jenis Produk-</option>
                <option value="frame">Frame</option>
                <option value="softlens">Softlens</option>
                <option value="others">Others</option>
            </select>
            <input name="barcode"
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