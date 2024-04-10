import { dbContext } from "../db/DbContext.js"



class RatsService {


    async getRats(searchQ) {
        const rats = await dbContext.Rats.find(searchQ)
        return rats
    }

}

export const ratsService = new RatsService