import { locationsService } from "../services/LocationsService.js"
import BaseController from "../utils/BaseController.js"


export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.getLocations)
            .get('/:locationId', this.hotLocations)
    }
    hotLocations(request, response, next) {
        try {

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