import { Schema } from "mongoose";


export const LocationSchema = new Schema({
    country: { type: String },
    area: { type: String },
    labels: [{ type: String }]
}, {
    toJSON: { virtuals: true }
})