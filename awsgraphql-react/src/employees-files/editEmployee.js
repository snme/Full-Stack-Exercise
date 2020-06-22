import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Typography from '@material-ui/core/Typography';

import { updateEmployee } from "../graphql/mutations";
import { createEmployee } from "../graphql/mutations";
import { createEmployeeSkills } from "../graphql/mutations";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { Query } from "react-apollo";
import { listSkills } from '../graphql/queries';
import { testThis } from '../graphql/queries';
import { getEmployee } from '../graphql/queries';

import { withApollo } from 'react-apollo';

//checkboxes
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class EditEmployee extends React.Component {
  customID = this.props.id;

  state = {
    employeeData: {
      firstname: this.props.firstname,
      lastname: this.props.lastname,
    },
    checkboxes: [], 
    skills: []
  };

  oldCheck = [];

  handleNameSubmit = (e, updateEmployee) => {

    console.log("Successfully Submitted.");

    e.preventDefault();
    updateEmployee({
      variables: {
        input: {
          id: this.props.id,
          firstname: this.state.employeeData.firstname,
          lastname: this.state.employeeData.lastname
        }
      }
    }).then(res => this.handleModal());
  };  

  handleSkillsSubmit = async (e, createEmployeeSkills) => {

    e.preventDefault();

    console.log("over here!");
    console.log(this.oldCheck);
    console.log(this.state.checkboxes);
    console.log(this.state.checkboxes[this.state.skills[0]]);
    const { client } = this.props;
    
    let i = 0;
    for (i = 0;i < this.state.skills.length; i++){
      if(this.state.checkboxes[this.state.skills[i]]){
        const a = await client.mutate({ mutation: gql(createEmployeeSkills), 
          variables: {input: {
          employeeSkillsSkillId: this.state.skills[i],
          employeeSkillsEmployeeId: this.customID,
        }},
      fetchPolicy: 'network-only' ,});
      }
    }

    console.log("Successfully Submitted.");
    
  };  

  handleModal = () => {
    console.log("closing");
  };

  handleItems = (items) => {
    let index = 0;
    for (index = 0; index < items.length; index++) { 
      this.setState({ ...this.state, [items[index].id]: true });
    } 
    //this.setState({ ...this.state, [id]: true });
    console.log("here");
  };

  handleFirstName = e => {
    this.setState({
      employeeData: { firstname: e.target.value }
    });
  };
  handleLastName = e => {
    this.setState({
      employeeData: { lastname: e.target.value }
    });
  };

  checkboxHandleChange = (event) => {
    let curState = this.state;
    curState.checkboxes[event.target.name] = !curState.checkboxes[event.target.name];
    //curState.checkboxes[event.target.name]
    //customID (employee)
    this.setState(curState);
    if(curState.checkboxes[event.target.name]){
      const { client } = this.props;
      const a = client.mutate({ mutation: gql(createEmployeeSkills), 
          variables: {input: {
          employeeSkillsSkillId: event.target.name,
          employeeSkillsEmployeeId: this.customID,
        }},
      fetchPolicy: 'no-cache' ,});
    }
    else{


    }

    console.log(this.state);
    console.log("changed state");
    //
  };

  componentDidMount = async () => {
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

    const { client } = this.props;
    const resSkills = await client.query({ query: gql(listSkills) });

    console.log("trying new custom");
    const resEmployees = await client.query({ query: gql(getEmployee), fetchPolicy: 'network-only', variables: {id: this.customID} })
    const custom = await client.query({ query: gql(testThis), fetchPolicy: 'network-only'});

    console.log(custom);

    console.log(this.state.employeeData.firstname);
    console.log(this.customID);
    console.log(await resEmployees);
    //resSkills.data.listSkills.items
    let items = resSkills.data.listSkills.items;
    let empSkills = resEmployees.data.getEmployee.skills.items;
    console.log(empSkills);
    let index = 0;
    let curState = this.state;
    for (index = 0; index < items.length; index++) { 
      curState.checkboxes[items[index].id] = false;
      this.oldCheck[items[index].id] = false;
      curState.skills.push(items[index].id);
    } 
    let j = 0;
      for (j = 0; j < empSkills.length; j++){
        if(empSkills[j].skill != null){
        curState.checkboxes[empSkills[j].skill.id] = true;
        this.oldCheck[empSkills[j].skill.id] = true;
      }
        else
          console.log(empSkills[j].skill);
      }
    this.setState(curState)
    console.log("first oldcheck");
    console.log(this.oldCheck);
    console.log(this.state);

  }



  render() {
    return (
      <div>

        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target={this.customID}
        >
          Update
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
            <h4>Edit Employee Name and Skills</h4>


            <Mutation mutation={gql(updateEmployee)}>
              {updateEmployee => {
                return (
                  <form
                    className="add-employee"
                    onSubmit={e => this.handleNameSubmit(e, updateEmployee)}
                  >
                    <input
                      type="text"
                      required
                      value={this.state.employeeData.firstname}
                      onChange={this.handleFirstName}
                    />

                    <input
                      type="text"
                      required
                      value={this.state.employeeData.lastname}
                      onChange={this.handleLastName}
                    />
                    <div className="modal-footer">
                      <button type="submit" className="modal-close waves-effect waves-red btn-flat">
                        Submit
                      </button>
                      <a className="modal-close waves-effect waves-red btn-flat">
                        Cancel
                      </a>

                  <p>Select associated skills here.</p>
                    </div>
                    
                  </form>



                );
              }}
            </Mutation>


            <Mutation mutation={gql(createEmployeeSkills)}>
              {createEmployeeSkills => {
                return (
                          
                  <form
                    className="add-skills"
                    onSubmit={e => this.handleSkillsSubmit(e, createEmployeeSkills)}
                  >        
                  <FormGroup row>


                    <Query query={gql(listSkills)}  >
                      {({loading, data, error, subscribeToMore }) => {

                        if (loading) return <p>loading...</p>
                        if (error) return <p>{error.message}</p>

                        return data.listSkills.items.map((skill) => {
                          return (

                            <div id={skill.id}>


                            <FormControlLabel
                              control={<Checkbox checked={this.state.checkboxes[skill.id] || false} onChange={this.checkboxHandleChange} name={skill.id} />}
                              label={<Typography >{skill.name}</Typography>}
                            />
                            </div>
                          )
                        });
                      }}
                    </Query>

                                <a className="modal-close waves-effect waves-red btn-flat">
                                  Cancel
                                </a>
                        </FormGroup>
                        </form>
                    );
                    }}
                    </Mutation>    
          </div>
        </div>
      </div>
    );
  }
}

export default withApollo(EditEmployee);




