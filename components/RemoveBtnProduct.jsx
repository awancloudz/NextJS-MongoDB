"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtnProduct({ id }){
    const router = useRouter();
    const removeProduct = async() => {
        const confirmed = confirm("Are you sure?");

        if(confirmed){
            const res = await fetch(`/api/products?id=${id}`,{
                method: "DELETE",
            });
            
            if(res.ok){
                router.refresh();
            }
        }
    }

    return (
        <>
        <button onClick={removeProduct} className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button>
        </>
    )
}