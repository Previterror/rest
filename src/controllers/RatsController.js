import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";


export class RatsController extends BaseController {
    constructor() {
        super('api/rats')
        this.router
            .get('', this.getRats)
            .get('/:ratId/missions', this.myMissions)
    }
    async myMissions(request, response, next) {
        try {
            const ratId = request.params.ratId
            const missions = await missionsService.getMyMissions(ratId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }


    async getRats(request, response, next) {
        try {
            const searchQ = request.query
            const rats = await ratsService.getRats(searchQ)
            response.send(rats)
        } catch (error) {
            next(error)
        }
    }

}