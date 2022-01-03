import { gql } from "@apollo/client";
// There should be four queries in this file: profiles, profile, me, and searches.
// Look to typeDefs in server --> schemas --> typeDefs to verify.

//
export const QUERY_PROFILES = gql`
  query allProfiles {
    # This is the query
    # Name of query, and then everything it should return.
    # The allprofiles query returns an array of profiles,
    profiles {
      _id
      name
      # We probably don't want skills to be returned for our users, instead we'll probably want a list of their saved searches?
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  # query (queryName($What it takes in: What it returns)) {
  # queryName from typeDef(name)
  # }
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;
