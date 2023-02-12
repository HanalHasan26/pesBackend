const mongoose = require('mongoose');


const playerSchema = mongoose.Schema({

    Name:{type:String},
    CardType:{type:String},
    PrograssionPoint:{type:Number},
    LevelOnePic:{type:String},
    MaxPlayerPic:{type:String},

    isTranding:{type:Boolean, default:false},

    Shooting:{type:Number},
    Passing:{type:Number},
    Dribbling:{type:Number},
    Dexterity:{type:Number},
    LowerBodyStrength:{type:Number},
    AerialStrength:{type:Number},
    Defending:{type:Number},
    GkOne:{type:Number},
    GkTwo:{type:Number},
    GkThree:{type:Number}




    // Name:{type:String},
    // Fullname:{type:String},
    // Team:{type:String},
    // League:{type:String},
    // Nationality:{type:String},
    // Rating:{type:String},
    // level:{type:String},
    // Contract:{type:String},
    // Position:{type:String},
    // FullNamePosition:{type:String},
    // Age:{type:String},
    // Height:{type:String},
    // Weight:{type:String},
    // Condition:{type:String},
    // Price:{type:String},
    // star:{type:String, default:0}, 
    // foot:{type:String},
    // footUsage:{type:String},
    // footAcc:{type:String},
    // form:{type:String},
    // injury:{type:String},
    // category:{type:String},
    // footPic:{type:String},
    // teamPic:{type:String},
    // nationalityPic:{type:String}, 
    // playerDp:{type:String}, 
    // LeaguePic:{type:String},
    
    
    
    // OffensiveA:{type:String},
    // Finishing:{type:String},
    // KinkingPower:{type:String},
    // BallControl:{type:String},
    // Dribbling:{type:String},
    // TightPossession:{type:String},
    // Balance:{type:String},
    // LowPass:{type:String},
    // LoftedPass:{type:String},
    // SetPieceTaking:{type:String},
    // Curl:{type:String},
    // Speed:{type:String},
    // Acceleration:{type:String},
    // PhysicalContact:{type:String},
    // Stamina:{type:String},
    // Heading:{type:String},
    // Jumping:{type:String},
    // DeffensiveAwareness:{type:String},
    // Tackling:{type:String},
    // DefensiveEngagement:{type:String},
    // Aggression:{type:String},
    // GkAwareness:{type:String},
    // GkCatching:{type:String},
    // GkParrying:{type:String},
    // GkReflexes:{type:String},
    // GkReach:{type:String},
    // WeakfootUsage:{type:String},
    // WeakFoot:{type:String},
    // InjuryResistance:{type:String},
    // PossessionGame:{type:String},
    // QuickCounter:{type:String},
    // LongBallCounter:{type:String},
    // OutWide:{type:String},
    // LongBall:{type:String},
    // selectedSkills:[{type:String}]
    // ,selectedPlayingStyle:[{type:String}]
    // ,selectedAiStyle:[{type:String}]
    // ,isTranding:{type:Boolean, default:false}

},
{
    timestamps: true
}
)

const  Player = mongoose.model("Player",playerSchema)

module.exports= Player;

