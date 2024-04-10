import { locationsService } from "../services/LocationsService.js"
import { missionsService } from "../services/MissionsService.js"
import BaseController from "../utils/BaseController.js"


export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.getLocations)
            .get('/:locationId', this.hotLocations)
    }
    async hotLocations(request, response, next) {
        try {
            const locationId = request.params.locationId
            const hotlocations = await missionsService.hotLocations(locationId)
            response.send(hotlocations)
        } catch (error) {
            next(error)
        }
    }

    async getLocations(request, response, next) {
        try {
            const searchQ = request.query
            const locations = await locationsService.getLocations(searchQ)
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }
}