const express= require('express');
const app = express();
const userRouter=require('./routes/userRoutes');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const MONGODB = "mongodb+srv://ecellQrPortal:EcellQrPortal@cluster0.oyskcxj.mongodb.net/?retryWrites=true&w=majority";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGODB,{useNewUrlParser:true}).then(()=>{
  console.log('mongoDB connection succesful');
  return server.listen({port:5000});
}).then((res)=>{
  console.log(`server running at ${res.url}`);
});

  