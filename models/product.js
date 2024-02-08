import mongoose, {Schema} from "mongoose";

const productSchema = new Schema(
    {
        cabang: String,
        jenisproduk: String,
        barcode: String,
        jumlah: Number
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;