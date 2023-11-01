import EditTopicForm from "@/components/EditTopicForm";

const getTopicsById = async (id) => {
    const url = process.env.URL_HOST;
    try {
        const res = await fetch(`${url}/api/topics/${id}`,{
            cache: "no-store",
        })

        if(!res.ok){
            throw new Error("Failed to fetch topic");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditTopic({ params }){
    const { id } = params;
    const { topic } = await getTopicsById(id);
    const { title, description } = topic;
    return(
        <>
        <EditTopicForm id={id} title={title} description={description}/>
        </>
    )
}