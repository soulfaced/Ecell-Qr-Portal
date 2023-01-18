const {gql}= require('apollo-server');

module.exports = gql`
type User{
    name:String
    createdAt:String
}

input UserInput{
    name:String
    descrpition:String
}

type Query{
    user(ID:ID!):User!
}

type Mutation{
    createUser(userInput:UserInput):User!
    deleteUser(ID:ID!):Boolean
    editUser(ID:ID!,userInput:UserInput):Boolean
}
`