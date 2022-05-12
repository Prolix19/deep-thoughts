// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }
    type Reaction {
        _id: ID
        reactionBody: String
        username: String
        createdAt: String
    }
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }
    type Query {
        thoughts(username: String): [Thought]
        user(username: String!): User
        users: [User]
        thought(_id: ID!): Thought
    }
`;

// export the typeDefs
module.exports = typeDefs;