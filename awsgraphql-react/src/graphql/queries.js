/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      employees {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getSkills = /* GraphQL */ `
query GetSkills($id: ID!){
  getEmployee($id: ID!){
    firstname
    lastname
    skills{
      items{
        skill {
          id
          name
        }
      }
    }
  }
}
`;


export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firstname
      lastname
      skills {
        items {
          id
          createdAt
          updatedAt
          skill {
            id 
            name
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        skills {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
