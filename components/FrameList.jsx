import Link from "next/link";
import RemoveBtnFrame from "./RemoveBtnFrame";
import {HiPencilAlt} from "react-icons/hi";

const getFrames = async () => {    
    try {
        const res = await fetch("/api/frames",{
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Failed to fetch frame");
        }
        else{
            return res.json();
        }
        
    } catch (error) {
        console.log("Error loading frame: ", error);
    }
}

export default async function FrameList(){
    const { frames } = await getFrames();
    return (
        <>
        <table width={"100%"}>
            <tr><th>Cabang</th><th>Barcode</th><th>Jumlah</th></tr>
        {frames.map((t) => (        
            <tr align="center" key={t._id}><td>{t.cabang}</td><td>{t.barcode}</td><td>{t.jumlah}</td>
            {/* <td><RemoveBtnFrame id={t._id}/></td>
            <td>
            <Link href={`/editFrame/${t._id}`}>
                <HiPencilAlt size={24}/>
            </Link></td> */}
            </tr>
        ))}
        </table>
        </>
    )
}