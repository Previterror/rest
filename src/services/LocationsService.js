import { dbContext } from "../db/DbContext.js"


class LocationsService {
    async getLocations(searchQ) {
        const locations = await dbContext.Locations.find(searchQ)
        return locations
    }

}

export const locationsService = new LocationsService