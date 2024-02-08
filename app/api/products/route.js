import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request){
    const{cabang, jenisproduk, barcode, jumlah} = await request.json();
    await connectMongoDB();
    await Product.create({cabang, jenisproduk, barcode, jumlah});
    return NextResponse.json({message:"Product Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const products = await Product.find().sort({
        barcode:1
    });
    return NextResponse.json({products});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({message:"Product deleted"},{status: 200});
}