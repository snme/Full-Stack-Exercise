import React from 'react'
import { Mutation } from 'react-apollo';
import { deleteEmployee } from '../graphql/mutations';
import gql from 'graphql-tag';
import { listEmployees } from '../graphql/queries';


class DeleteEmployee extends React.Component {
    elementID = this.props.id;

    handleDelete = (deleteEmployee) => {
        deleteEmployee({
            variables: {
                input: {
                    id: this.props.id
                }
            },
            optimisticResponse: () => ({
                deleteEmployee: {
                    __typename: 'ModelPostConnection',
                    id: this.props.id,
                    firstname: this.props.name,
                    lastname: this.props.name,
                    createdAt: this.props.createdAt
                }
            }),
            update: (cache, { data: { deleteEmployee } }) => {
                const query = gql(listEmployees);

                // Read query from cache
                const data = cache.readQuery({ query });

                // Add updated postsList to the cache copy
                data.listEmployees.items = [
                    ...data.listEmployees.items.filter(item =>
                     item.id !== this.elementID)
                ];
                //item.id !== this.elementID && item.name != this.elementName)
                //Overwrite the cache with the new results
                cache.writeQuery({ query, data });
            }
        })
    }

    render() {
        return (
            <Mutation mutation={gql(deleteEmployee)}>
                {(deleteEmployee, { loading, error }) => {
                    return <button class="waves-effect waves-light btn modal-trigger" onClick={
                       () => this.handleDelete(deleteEmployee)}>
                        {loading ? "Removing..." : "Delete Employee"}</button>
                }}
            </Mutation>
        )
    }
}


export default DeleteEmployee;