import connectMongoDB from "@/libs/mongodb";
import Frame from "@/models/frame";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newCabang: cabang, newBarcode: barcode, newJumlah: jumlah } = await request.json();
    await connectMongoDB();
    await Frame.findByIdAndUpdate(id, {cabang, barcode, jumlah});
    return NextResponse.json({message: "Frame Updated"}, {status: 200});
}

export async function GET(request, {params}){
    const { id } = params;
    await connectMongoDB();
    const frame = await Frame.findOne({_id: id});
    return NextResponse.json({frame}, {status: 200});
}