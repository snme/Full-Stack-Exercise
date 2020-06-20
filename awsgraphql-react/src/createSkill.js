import React from "react";
import { Mutation } from "react-apollo";
import { createSkill } from "./graphql/mutations";
import gql from "graphql-tag";

class CreateSkill extends React.Component {
  handleSubmit = (e, createSkill) => {
    e.preventDefault();
    createSkill({
      variables: {
        input: {
          name: this.skill.value
        }
      }
    }).then(res => {
      this.skill.value = "";
    });
    
    console.log('asdf');
  };
  render() {
    return (

      <div className="row">
        <h3>Add, Update, and Delete Skills!</h3>
        hey yall? what's brackin
        <Mutation mutation={gql(createSkill)}>
          {(createSkill, { data, loading, error }) => {
            return (
              <div className="row">

                <form
                  className="col s12"
                  onSubmit={e => this.handleSubmit(e, createSkill)}
                >
                  <div >
                  <input
                    id="skillEntry" className="input-field col s6" 
                    type="text" placeholder="Title"
                    ref={node => (this.skill = node)}
                    required
                  />
                  </div>
                  <br/>


                  <button className="waves-effect waves-light btn">{loading ? "Adding..." : "Create Skill"}
                  </button>
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

export default CreateSkill;