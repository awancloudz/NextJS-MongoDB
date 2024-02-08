import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const { id } = params;
    await connectMongoDB();
    const products = await Product.find({jenisproduk: id}).sort({
        barcode:1
    });
    return NextResponse.json({products}, {status: 200});
}