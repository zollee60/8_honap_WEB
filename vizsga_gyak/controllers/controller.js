const express = require("express");
const router = express.Router();
const service = require("../services/services");

router.get("/getF", async (req, res) => {
    const data = await service.getFoglalkozasok();
    res.json(data);
})

router.get("/getM", async (req, res) => {
    const data = await service.getMegyeDataAll();
    res.json(data);
})

router.get("/getR", async (req, res) => {
    const data = await service.getRegioAll();
    res.json(data);
})

router.get("/getRF/:rkod", async (req, res) => {
    const rkod = parseFloat(req.params.rkod);
    const data = await service.getRegioFiltered(rkod);
    res.json(data);
})

router.post("/sendR", async (req, res) => {
    if(await service.addRegion(req.body)){
        res.sendStatus(200);
    } else{
        res.sendStatus(500);
    }
    
})

module.exports = router;