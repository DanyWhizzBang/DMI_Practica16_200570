import Player from "../model/Player.js";

const  createPlayer = async(rq, rs) =>{
    console.log("Se ha solicitado la creacion de un nuevo jugador");
    const {name, email, nickname, birthdate} = rq.body
    console.log(rq.body)
    const newPlayer = await Player.create(rq.body)


if(newPlayer){
    rs.status(200)
    rs.json(`se ha creado un nuevo jugadorcon el nombre: ${name}, email: ${email},
     Nickname: ${nickname}, Fecha de nacimiento: ${birthdate}`);

}else{
    rs.status(400)
    rs.json({
        messageStatus: `Hubo un error al intentar crear el nuevo usuario, por favor verifica los datos`
    });
}
}

const findAll = async (rq,rs)=>{
    console.log("Se han solicitado todos los jugadores");

    const allPlayers = await Player.findAll()

    if(allPlayers === null){
        rs.json({
            messageStatus: `No hay jugadores registrados.`
        });
    }else{
        rs.status(200);
        rs.json(allPlayers);
    }
  

}

const  findPlayerbyID = async (rq, rs) =>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado la busqueda de un jugador: ${playerID}`);

    const playerFound = await Player.findByPk(playerID)

    if(playerFound==null){
        res.status(400)
        res.send(`El jugador con ID ${playerID},no se encuentraen la DB.`)
    }else{
        rs.status(200);
        rs.json(playerFound)
    }

}

const  findPlayerbyEmail = async(rq, rs) =>{
    const playerEmail = rq.params.playerEmail
    console.log(`se ha solicitado buscar a un jugador con correo: ${playerEmail}`);

    const playerFoundEmail = await Player.findOne({where: {email: playerEmail}})

    if(playerFoundEmail===null){
        rs.status(200)
        rs.json({
            messageStatus: `El jugador con el Email ${playerEmail}, no existe en la BD.`
        });    
    }else{
        rs.status(200);
        rs.json(playerFoundEmail)
    }


}

const  updatePlayer = (rq, rs) =>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado actuallizar un jugador: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado actuallizar el jugador: ${playerID}`)
}
const  deletePlayer = (rq, rs) =>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado borrar un jugador: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado borrar el jugador con id: ${playerID}`)
}
const  changePlayerPortrait = (rq, rs) =>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitad el cambio: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitad el cambio de la foto de perfil del jugador: ${playerID}`)
}

export {
    findAll,
    createPlayer, 
    findPlayerbyID, 
    findPlayerbyEmail, 
    updatePlayer, 
    deletePlayer, 
    changePlayerPortrait
}