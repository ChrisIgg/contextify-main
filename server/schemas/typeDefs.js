const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Search {
    _id: ID
    name: String
    fieldA: String
    # this is for the items that they can search against i.e. bananas
    fieldB: [Items]
  }
  # this is created to represent the preselect items that a user would leverage as a their contextual reference. I am not sure it is needed in TypeDefs, Models, or both files?
  type Items {
    itemName: String!
    weight: Int
    mass: Int
    diameter: Int
    distance: Int
    duration: Int
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Added query to return all items
    items: [Items]!
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    searches: [Search]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSearch(
      searchId: ID!
      name: String!
      weight: Int
      mass: Int
      diameter: Int
      distance: Int
      duration: Int
    ): Search
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
