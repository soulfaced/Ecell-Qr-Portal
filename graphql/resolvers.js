const User = require("./../models/User");

module.exports = {
    Query:{
        async user(_,{ID}){
            return await User.findById(ID)
        }
    },
    Mutation:{
        async createUser(_,{userInput:{name,description}}){
            const createUser = new User({
                name:name,
                description:description,
                createdAt:new Date().toISOString(),
            });

            const res = await createUser.save();

            return{
                id:res.id,
                ...res._doc
            }
        },
        async deleteUser(_,{ID}){
            const wasDeleted = (await User.deleteOne({_id:ID})).deletedCount;
            return wasDeleted;
        },
    }
}