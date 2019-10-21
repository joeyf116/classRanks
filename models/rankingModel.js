const db = require("./conn");

class Ranking {
    constructor(id, topic, rank) {
        this.id = id;
        this.topic = topic;
        this.rank = rank;
    }
    static async getAll() {
        db.any(`SELECT * 
        FROM rankings JOIN topics 
        ON topics.id = rankings.topic_id;`).then(response => {
        });
        try {
            const response = await(db.any(`SELECT * 
            FROM rankings JOIN topics 
            ON topics.id = rankings.topic_id;`));
            return response;

        } catch(error) {
            return error.message
        }
    }
    static updateRank() {
        if(value == rank) {
            
        }
    }
}

module.exports = Ranking;