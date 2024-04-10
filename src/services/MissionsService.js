import { dbContext } from "../db/DbContext.js"


class MissionsService {


    async hotLocations(locationId) {
        const hotlocations = await dbContext.Missions.find({ locationId: locationId }).populate('rat', 'callsign')
        return hotlocations
    }
    async getMyMissions(ratId) {
        const missions = await dbContext.Missions.find({ ratId: ratId }).populate('location')
        return missions
    }
    async assignMissions(missionData) {
        const mission = await dbContext.Missions.create(missionData)
        await mission.populate('rat', 'callsign')
        await mission.populate('location')
        return mission
    }
    async getMissions(searchQ) {
        const missions = await dbContext.Missions.find(searchQ).populate('location').populate('rat', 'callsign')
        return missions
    }

}

export const missionsService = new MissionsService