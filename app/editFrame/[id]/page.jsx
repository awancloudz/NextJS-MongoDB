import EditFrameForm from "@/components/EditFrameForm";

const getFramesById = async (id) => {
    const url = process.env.URL_HOST;
    try {
        const res = await fetch(`${url}/api/frames/${id}`,{
            cache: "no-store",
        })

        if(!res.ok){
            throw new Error("Failed to fetch frame");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditFrame({ params }){
    const { id } = params;
    const { frame } = await getFramesById(id);
    const { cabang, barcode, jumlah } = frame;
    return(
        <>
        <EditFrameForm id={id} cabang={cabang} barcode={barcode} jumlah={jumlah}/>
        </>
    )
}