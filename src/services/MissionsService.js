import { dbContext } from "../db/DbContext.js"


class MissionsService {
    async getMissions(searchQ) {
        const missions = await dbContext.Missions.find(searchQ).populate('location').populate('rat', 'callsign')
        return missions
    }

}

export const missionsService = new MissionsService