import { gql } from "@apollo/client";

export const GET_STARWARS = gql`
  query {
    allPeople {
      people {
        name
        id
        eyeColor
      }
    }
  }
`;

export const GET_PERSON = gql`
  query person($ID: ID) {
    person(id: $ID) {
    name
    id
    hairColor
    mass
    birthYear
    eyeColor
    mass
    skinColor
    filmConnection{  
      films{
        title
        planetConnection{
          planets{
            name
            gravity
          }
        }
      }
      edges{
        node{
          director
          episodeID

        }
      }
    }
    }
  }
`;
