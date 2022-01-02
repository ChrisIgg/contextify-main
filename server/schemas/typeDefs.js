const { gql } = require("apollo-server-express");
// Typedefs in this file: Profile, Auth, Search, and Items.

// Queries in this file: profiles, profile, me, and searches

// Mutations in this file: addProfile, login, addSearch, removeProfile, removeSkill
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
    name: String!
    weight: number
    mass: number
    diameter: number
    distance: number
    duration: number
  }

  type Query {
    # The profiles query returns an array of Profiles
    profiles: [Profile]!
    # The profile query takes in a profileId and returns a profile
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    # searches
    searches: [Search]
  }

  type Mutation {
    # addProfile takes in a name, email and password, returns Auth
    addProfile(name: String!, email: String!, password: String!): Auth
    # Login takes in an email and password, returns Auth
    login(email: String!, password: String!): Auth
    # addSearch takes in a searchId, name, weight, mass, diameter, distance, and duration and return a Search
    addSearch(
      searchId: ID!
      name: String!
      weight: number
      mass: number
      diameter: number
      distance: number
      duration: number
    ): Search
    # removeProfile
    removeProfile: Profile
    # removeSkill takes in a skill, returns a profile.
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
