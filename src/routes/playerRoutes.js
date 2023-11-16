import {changePlayerPortrait, createPlayer, deletePlayer, findPlayerbyEmail, findPlayerbyID, updatePlayer, findAll} from "../controllers/playerController.js"

import express from "express";

const router = express.Router()

router.get("/findAll", findAll)
router.post("/newPlayer", createPlayer)
router.get("/findOneByID/:playerID", findPlayerbyID)
router.get("/findPlayerbyEmail/:playerEmail", findPlayerbyEmail)
router.put("/updatePlayer/:playerID", updatePlayer)
router.patch("/changePlayerPortrait/:playerID", changePlayerPortrait)
router.delete("/deletePlayer/:playerID", deletePlayer)

export default router