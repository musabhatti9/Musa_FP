const mongoose=require ('mongoose');
const data=mongoose.Schema(
{
    // user:{
    //     type:mongoose.Types.ObjectId,
    //     ref: "user"
    // },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    activitytype: {
        type: String,
    },
    goalkm: {
        type: Number,
    },
    goalduration: {
        type: Number,
    },
    activitykm: {
        type: Number,
    },
    activityduration: {
        type: Number,
    }
}
)
module.exports=mongoose.model('data', data)