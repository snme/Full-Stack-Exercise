import React from 'react'
import { Query } from "react-apollo";
import { listEmployees } from '../graphql/queries';
import { listSkills } from '../graphql/queries';
import { listSkillsAndEmployees } from '../graphql/queries';
import { onCreateEmployee } from '../graphql/subscriptions'
import gql from 'graphql-tag';
import Employee from './employee';

class DisplayEmployee extends React.Component {

  subscribeToNewEmployees = (subscribeToMore) => {
    return subscribeToMore({
      document: gql(onCreateEmployee),
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
          const newSkillData = subscriptionData.data.onCreateEmployee;
          return Object.assign({}, prev, {
            listEmployees: {
              ...prev.listEmployees,
              items: [...prev.listEmployees.items, newSkillData]
            }
          })
        }
    })
  }

/*
      <div className="row">
        <Query query={gql(listSkills)}  >
        {({loading, data, error, subscribeToMore }) => {
          console.log("im in query");

          if (loading) return <p></p>
          if (error) return <p>{error.message}</p>

          return data.listSkills.items.map((skill) => {

            return (

              <div>
              </div>
            )
          });
        }}
      </Query>
*/
  render() {

    return (

      <div className="row">
        <Query query={gql(listEmployees)}  >

          {({loading, data, error, subscribeToMore }) => {

            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            console.log(data);

            return <Employee data={data} subscribeToMore={() =>
                this.subscribeToNewEmployees(subscribeToMore)} />
          }}
        </Query>
      </div>
    )
  }
}

export default DisplayEmployee;