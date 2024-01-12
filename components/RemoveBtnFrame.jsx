"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtnFrame({ id }){
    const router = useRouter();
    const removeFrame = async() => {
        const confirmed = confirm("Are you sure?");

        if(confirmed){
            const res = await fetch(`/api/frames?id=${id}`,{
                method: "DELETE",
            });
            
            if(res.ok){
                router.refresh();
            }
        }
    }

    return (
        <>
        <button onClick={removeFrame} className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button>
        </>
    )
}