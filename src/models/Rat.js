import { Schema } from "mongoose"


export const RatSchema = new Schema({
    name: { type: String },
    callsign: { type: String },
    picture: { type: String },
    specialties: [{ type: String }]
})