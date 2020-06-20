import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { deleteSkill } from './graphql/mutations';
import gql from 'graphql-tag';
import { listSkills } from './graphql/queries';


class DeleteSkill extends Component {
    elementID = this.props.id;

    handleDelete = (deleteSkill) => {
        deleteSkill({
            variables: {
                input: {
                    id: this.props.id
                }
            },
            optimisticResponse: () => ({
                deleteSkill: {
                    // This type must match the return type of
                    //the query below (listSkills)
                    __typename: 'ModelPostConnection',
                    id: this.props.id,
                    name: this.props.name,
                    createdAt: this.props.createdAt
                }
            }),
            update: (cache, { data: { deleteSkill } }) => {
                const query = gql(listSkills);

                // Read query from cache
                const data = cache.readQuery({ query });

                // Add updated postsList to the cache copy
                data.listSkills.items = [
                    ...data.listSkills.items.filter(item =>
                     item.id !== this.elementID)
                ];
                console.log("hello");
                console.log(data);


                //Overwrite the cache with the new results
                cache.writeQuery({ query, data });
            }
        })
    }

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