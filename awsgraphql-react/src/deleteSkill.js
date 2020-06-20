import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { deleteSkill } from './graphql/mutations';
import gql from 'graphql-tag';
import { listSkills } from './graphql/queries';


class DeleteSkill extends Component {

    handleDelete = (deleteSkill) => {
        deleteSkill({
            variables: {
                input: {
                    id: this.props.id
                }
            }}).then(res => {console.log("done")});
    };

    render() {
        return (
            <Mutation mutation={gql(deleteSkill)}>
                {(deleteSkill, { loading, error }) => {
                    return <button class="waves-effect waves-light btn modal-trigger" onClick={
                       () => this.handleDelete(deleteSkill)}>
                        {loading ? "Removing..." : "Delete Skill"}</button>
                }}
            </Mutation>
        )
    }
}


export default DeleteSkill;