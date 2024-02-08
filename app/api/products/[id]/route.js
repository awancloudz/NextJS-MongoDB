import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newCabang: cabang, newBarcode: barcode, newJumlah: jumlah } = await request.json();
    await connectMongoDB();
    await Product.findByIdAndUpdate(id, {cabang, barcode, jumlah});
    return NextResponse.json({message: "Product Updated"}, {status: 200});
}

export async function GET(request, {params}){
    const { id } = params;
    await connectMongoDB();
    const product = await Product.findOne({_id: id});
    return NextResponse.json({product}, {status: 200});
}