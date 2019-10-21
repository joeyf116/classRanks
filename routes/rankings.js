const express = require("express"),
    router = express.Router(),
    rankingModel = require("../models/rankingModel");

    router.get("/", async function(req,res,next){
        const rankData = await rankingModel.getAll();
        console.log("RANK DATA: ", rankData);

        res.status(200).render('template', {
        locals: {
            title: 'Rankings',
            data: rankData
        },
        partials: {
            partial: 'partial-rankings'
        }
    });
});

router.post("/rankings", async (req,res) => {
    const { topic, rank } = req.body;
    const rankingInstance = new Ranking(topic, rank);
    const rankData = await rankingInstance.updateRank();

})

module.exports = router;
