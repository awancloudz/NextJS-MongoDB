import Link from "next/link";
import RemoveBtnProduct from "./RemoveBtnProduct";
import {HiPencilAlt} from "react-icons/hi";

const getProduct = async () => {    
    try {
        const res = await fetch("/api/products",{
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Failed to fetch product");
        }
        else{
            return res.json();
        }
        
    } catch (error) {
        console.log("Error loading product: ", error);
    }
}

export default async function ProducList(){
    const { products } = await getProduct();
    return (
        <>
        <p align='center'><b>Product List - All Data</b></p><hr/>
        <table width={"100%"}>
            <tr><th>Cabang</th><th>Jenis</th><th>Barcode</th><th>Jumlah</th></tr>
        {products.map((t) => (        
            <tr align="center" key={t._id}><td>{t.cabang}</td><td>{t.jenisproduk}</td><td>{t.barcode}</td><td>{t.jumlah}</td>
            {/* <td><RemoveBtnProduct id={t._id}/></td>
            <td>
            <Link href={`/editProduct/${t._id}`}>
                <HiPencilAlt size={24}/>
            </Link></td> */}
            </tr>
        ))}
        </table>
        </>
    )
}