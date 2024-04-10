import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class MissionsController extends BaseController {
    constructor() {
        super('api/missions')
        this.router
            .get('', this.getMissions)
    }
    async getMissions(request, response, next) {
        try {
            const searchQ = request.query
            const missions = await missionsService.getMissions(searchQ)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
}