import mongoose, {Schema} from "mongoose";

const frameSchema = new Schema(
    {
        cabang: String,
        barcode: String,
        jumlah: Number
    },
    {
        timestamps: true,
    }
);

const Frame = mongoose.models.Frame || mongoose.model("Frame", frameSchema);

export default Frame;