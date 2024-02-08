import EditProductForm from "@/components/EditProductForm";

const getProductsById = async (id) => {
    const url = process.env.URL_HOST;
    try {
        const res = await fetch(`${url}/api/products/${id}`,{
            cache: "no-store",
        })

        if(!res.ok){
            throw new Error("Failed to fetch product");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditProduct({ params }){
    const { id } = params;
    const { product } = await getProductsById(id);
    const { cabang, barcode, jumlah } = product;
    return(
        <>
        <EditProductForm id={id} cabang={cabang} barcode={barcode} jumlah={jumlah}/>
        </>
    )
}