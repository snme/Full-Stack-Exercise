import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { updateSkill } from "./graphql/mutations";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class EditSkill extends React.Component {
  customID = "modal1 " + this.props.id;
  state = {
    skillData: {
      name: this.props.name,
    }
  };

  handleSubmit = (e, updateSkill) => {
    e.preventDefault();
    updateSkill({
      variables: {
        input: {
          id: this.props.id,
        name: this.state.skillData.name
        }
      }
    }).then(res => this.handleModal());
    console.log("submitting");
  };  

  handleModal = () => {
    console.log("closing now!!!!!!!!");
  };

  handleName = e => {
    this.setState({
      skillData: { name: e.target.value }
    });
    console.log(this.state.skillData.name);
  };

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

  console.log(this.customID);
  }

  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target={this.customID}
        >
          Modal
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={this.customID}
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          
          <div className="modal-content blue-text">
            <h4>Modal Header</h4>
            <Mutation mutation={gql(updateSkill)}>
              {updateSkill => {
                return (
                  <form
                    className="add-skill"
                    onSubmit={e => this.handleSubmit(e, updateSkill)}
                  >
                    <input
                      type="text"
                      required
                      value={this.state.skillData.name}
                      onChange={this.handleName}
                    />
            <button type="submit" className="modal-close waves-effect waves-red btn-flat">
              Agree
            </button>
                  </form>
                );
              }}
            </Mutation>
                    <div className="modal-footer">
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditSkill;