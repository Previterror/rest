import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";


export class RatsController extends BaseController {
    constructor() {
        super('api/rats')
        this.router
            .get('', this.getRats)
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