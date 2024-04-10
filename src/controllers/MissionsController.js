import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class MissionsController extends BaseController {
    constructor() {
        super('api/missions')
        this.router
            .get('', this.getMissions)
            .post('', this.assignMissions)
    }

    async assignMissions(request, response, next) {
        try {
            const missionData = request.body
            const mission = await missionsService.assignMissions(missionData)
            response.send(mission)
        } catch (error) {
            next(error)
        }
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