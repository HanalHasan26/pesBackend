const asyncHandler = require("express-async-handler"); 
const Player = require("../../Models/Players");

const addNewPlayer =asyncHandler(async(req,res)=>{

const {Name,CardType,PrograssionPoint,LevelOnePic,MaxPlayerPic,Shooting,Passing,Dribbling,Dexterity,LowerBodyStrength,AerialStrength,Defending,GkOne,GkTwo,GkThree} = req.body

const player = await Player.create({
    Name,
    CardType,
    PrograssionPoint,
    LevelOnePic,
    MaxPlayerPic,
    Shooting,
    Passing,
    Dribbling,
    Dexterity,
    LowerBodyStrength,
    AerialStrength,
    Defending,
    GkOne,
    GkTwo,
    GkThree

})

if (player) {
    res.status(200).json(player)
} else {
    res.status(400).json({
        message:"not posted",
        issError:true
    })
}

})

const fetchNewPlayer =asyncHandler(async(req,res)=>{
    
   const  allNewPlayer = await Player.find({})

   if (allNewPlayer) {
    res.status(200).json(allNewPlayer)
   } else {
    res.status(400).json({
        message:"not Getting",
        issError:true
    })

   }
})

module.exports ={addNewPlayer,fetchNewPlayer}