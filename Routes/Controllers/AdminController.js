const asyncHandler = require("express-async-handler"); 
const Player = require("../../Models/Players");
const SliderHome = require("../../Models/SliderModel")



const getPlayerId = asyncHandler(async(req,res)=>{



    const updatePlayer = await Player.findById({_id:req.params._id})
    res.json(updatePlayer);

}) 

const updatePlayer = asyncHandler(async(req,res)=>{
    
    const { Fullname,_id,Name, Team, League, Nationality, Rating, Contract, Position, Age, Height, Weight, Condition, Price, star, foot,footUsage,footAcc,form,injury, category, footPic, teamPic, nationalityPic, playerDp, LeaguePic,Level} = req.body;

    const { OffensiveA, Finishing, KinkingPower,BallControl, Dribbling, TightPossession, Balance, LowPass,
        LoftedPass, SetPieceTaking, Curl, Speed, Acceleration, PhysicalContact, Stamina,Heading, Jumping, DeffensiveAwareness, Tackling,DefensiveEngagement,
        Aggression, GkAwareness, GkCatching, GkParrying, GkReflexes, GkReach, WeakfootUsage,WeakFoot, Form, InjuryResistance,
        PossessionGame, QuickCounter,LongBallCounter,OutWide,LongBall,selectedSkills,selectedPlayingStyle,selectedAiStyle   } = req.body
 
const player = await Player.findByIdAndUpdate(_id,{
    Name,
    Fullname,
    Team,
    League,
    Nationality,
    Rating,
    Contract,
    Position,
    Age,
    Height,
    Weight,
    Condition,
    Price,
    star,
    foot,
    footUsage,
    footAcc,
    form,
    injury,
    category,
    footPic,
    teamPic,
    nationalityPic, 
    playerDp, 
    LeaguePic,
    Level,

///ADVANCE\\\\\\

    OffensiveA,
    Finishing,
    KinkingPower,
    BallControl,
    Dribbling,
    TightPossession,
    Balance,
    LowPass,
    LoftedPass,
    SetPieceTaking,
    Curl,
    Speed,
    Acceleration,
    PhysicalContact,
    Stamina,
    Heading,
    Jumping,
    DeffensiveAwareness,
    Tackling,
    DefensiveEngagement,
    Aggression,
    GkAwareness,
    GkCatching,
    GkParrying,
    GkReflexes,
    GkReach,
    WeakfootUsage,
    WeakFoot,
    Form,
    InjuryResistance,
    PossessionGame,
    QuickCounter,
    LongBallCounter,
    OutWide,
    LongBall,
    selectedSkills,
    selectedPlayingStyle,
    selectedAiStyle 
    
    });

        res.status(201).json(player)

})

const removePlayer = asyncHandler(async(req,res)=>{

const {_id} = req.body

    const removePlayer = await Player.findByIdAndRemove({_id:_id})
    return res.json(removePlayer)
    
})



const GetSlider = asyncHandler (async(req,res)=>{

        const GetSlider = await SliderHome.find({});
        return res.json(GetSlider)
})

const slider = asyncHandler (async(req,res)=>{

        const {pic1,pic2,pic3}  =req.body
        const slider = await SliderHome.updateOne({pic1:pic1,pic2:pic2,pic3:pic3});
        return res.json(slider)
})


const AddTrending = asyncHandler(async(req,res)=>{
    const {_id} = req.body
    const AddTrending= await Player.findByIdAndUpdate({_id:_id},{"$set":{"isTranding":true}})
    res.json(AddTrending)
})


const trending = asyncHandler (async(req,res)=>{
    const getTrending = await Player.find({isTranding:true});
    return res.json(getTrending)
})

const removeTrending = asyncHandler(async(req,res)=>{
    const {_id} = req.body
    const removeTrending = await Player.findByIdAndUpdate({_id:_id},{"$set":{"isTranding":false}})
    res.json(removeTrending)
})


module.exports = { getPlayerId, updatePlayer,removePlayer ,GetSlider,slider,trending,AddTrending,removeTrending} 