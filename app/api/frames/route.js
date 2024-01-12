import connectMongoDB from "@/libs/mongodb";
import Frame from "@/models/frame";
import { NextResponse } from "next/server";

export async function POST(request){
    const{cabang, barcode, jumlah} = await request.json();
    await connectMongoDB();
    await Frame.create({cabang, barcode, jumlah});
    return NextResponse.json({message:"Frame Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const frames = await Frame.find();
    return NextResponse.json({frames});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Frame.findByIdAndDelete(id);
    return NextResponse.json({message:"Frame deleted"},{status: 200});
}