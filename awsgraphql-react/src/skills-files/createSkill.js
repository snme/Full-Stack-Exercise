import React from "react";
import { Mutation } from "react-apollo";
import { createSkill } from "../graphql/mutations";
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
      console.log("submitted skill");
    });
  };
  render() {
    return (

      <div className="row">
        <Mutation mutation={gql(createSkill)}>
          {(createSkill, { data, loading, error }) => {
            return (
              <div className="row">

                <form
                  className="col s12"
                  onSubmit={e => this.handleSubmit(e, createSkill)}
                >
                  <div className="col s12">
                  <input
                    id="skillEntry" className="input-field col s4" 
                    type="text" placeholder="Type new skill"
                    ref={node => (this.skill = node)}
                    required
                  />
                  <br/>


                  <button className="waves-effect waves-light btn">{loading ? "Adding..." : "Create Skill"}
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

export default CreateSkill;