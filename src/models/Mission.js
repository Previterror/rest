import { Schema } from "mongoose";


export const MissionSchema = new Schema({
    codename: { type: String },
    objective: { type: String },
    year: { type: String },
    locationId: { type: Schema.ObjectId, ref: 'Location' },
    ratId: { type: Schema.ObjectId, ref: 'Rat' },
    completed: { type: Boolean, default: false }
}, {
    toJSON: { virtuals: true }
})

MissionSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Location',
    foreignField: '_id',
    justOne: true
})

MissionSchema.virtual('rat', {
    localField: 'ratId',
    ref: 'Rat',
    foreignField: '_id',
    justOne: true
})