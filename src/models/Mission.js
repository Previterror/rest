import { Schema } from "mongoose";


export const MissionSchema = new Schema({
    codename: { type: String },
    objective: { type: String },
    year: { type: String },
    locationId: { type: Schema.ObjectId, ref: 'Location' },
    ratId: { type: Schema.ObjectId, ref: 'Rat' }
}, {
    toJSON: { virtuals: true }
})