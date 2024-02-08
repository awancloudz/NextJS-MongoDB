import Link from "next/link"
export default function Navbar(){
    return (
        <>
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>Home</Link>
            <Link className="text-white font-bold" href={"/products/frame"}>Frame</Link>
            <Link className="text-white font-bold" href={"/products/softlens"}>Softlens</Link>
            <Link className="text-white font-bold" href={"/products/others"}>Others</Link>
            <Link className="bg-white p-2" href={"/addProduct"}>Add Product</Link>
        </nav>
        </>
    )
}