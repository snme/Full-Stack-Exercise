import React from 'react'
import { Query } from "react-apollo";
import { listSkills } from '../graphql/queries';
import { onCreateSkill } from '../graphql/subscriptions'
import gql from 'graphql-tag';
import Skill from './skill'

class DisplaySkills extends React.Component {

  subscribeToNewSkills = (subscribeToMore) => {
    return subscribeToMore({
      document: gql(onCreateSkill),
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
          const newSkillData = subscriptionData.data.onCreateSkill;
          return Object.assign({}, prev, {
            listSkills: {
              ...prev.listSkills,
              items: [...prev.listSkills.items, newSkillData]
            }
          })
        }
    })
  }


  render() {

    return (
      <div className="row">
        
        <Query query={gql(listSkills)}  >

          {({loading, data, error, subscribeToMore }) => {

            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>


            return <Skill data={data} subscribeToMore={() =>
                this.subscribeToNewSkills(subscribeToMore)} />
          }}
        </Query>
      </div>
    )
  }
}

export default DisplaySkills;