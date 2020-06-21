import React from "react";
import { Mutation } from "react-apollo";
import { createEmployee } from "../graphql/mutations";
import gql from "graphql-tag";

class CreateEmployee extends React.Component {
  handleSubmit = (e, createEmployee) => {
    e.preventDefault();
    createEmployee({
      variables: {
        input: {
          firstname: this.firstname.value,
          lastname: this.lastname.value
        }
      }
    }).then(res => {
      this.firstname.value = "";
      this.lastname.value = "";
    });
  };
  render() {
    return (

      <div className="row">
        <Mutation mutation={gql(createEmployee)}>
          {(createEmployee, { data, loading, error }) => {
            return (
              <div className="row">

                <form
                  className="col s12"
                  onSubmit={e => this.handleSubmit(e, createEmployee)}
                >
                  <div className="col s12">
                  <input
                    id="firstnameEntry" className="input-field col s4" 
                    type="text" placeholder="Type firstname"
                    ref={node => (this.firstname = node)}
                    required
                  />
                  <input
                    id="lastnameEntry" className="input-field col s4" 
                    type="text" placeholder="Type lastname"
                    ref={node => (this.lastname = node)}
                    required
                  />
                  <br/>


                  <button className="waves-effect waves-light btn">{loading ? "Adding..." : "Create Employee"}
                  </button>

                  </div>
                </form>
                {error && <p>{error.message}</p>}
              </div>
            );
          }}
        </Mutation>      
      </div> 
    );
  }
}

export default CreateEmployee;