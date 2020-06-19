import React from "react";
import { updateSkill } from "./graphql/mutations";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class EditSkill extends React.Component {
	state = {
    show: false,
    postData: {
      name: this.props.name,
    }
  };

  handleModal = () => {
    this.setState({ show: !this.state.show });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleSubmit = (e, updateSkill) => {
    e.preventDefault();
    updateSkill({
      variables: {
        input: {
          id: this.props.id,
      	name: this.props.name
        }
      }
    }).then(res => this.handleModal());
  };

  handleName = e => {
    this.setState({
      postData: { ...this.state.postData, name: e.target.value }
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <div className="modal">
            <button className="waves-effect waves-light btn modal-trigger" onClick={this.handleModal}>
              X
            </button>
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
                      value={this.state.postData.name}
                      onChange={this.handleName}
                    />
                    <button className="waves-effect waves-light btn">Update Post</button>
                  </form>
                );
              }}
            </Mutation>
          </div>
        )}
        <button onClick={this.handleModal}>Edit</button>
      </>
    );
  }
}

export default EditSkill;