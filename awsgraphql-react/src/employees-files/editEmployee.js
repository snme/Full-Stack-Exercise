import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Typography from '@material-ui/core/Typography';

import { updateEmployee } from "../graphql/mutations";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { Query } from "react-apollo";
import { listSkills } from '../graphql/queries';
import { listEmployees } from '../graphql/queries';
import { getEmployee } from '../graphql/queries';

import { withApollo } from 'react-apollo';

//

//checkboxes
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';





function CheckboxLabels(data) {
  console.log(data);

  const [astate, asetState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });


  const handleChange = (event) => {
    asetState({ ...astate, [event.target.name]: event.target.checked });
    console.log(astate);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={astate.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={astate.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
      <FormControlLabel
        control={
          <Checkbox
            checked={astate.checkedF}
            onChange={handleChange}
            name="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      />
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label="Custom icon"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="Custom size"
      />
    </FormGroup>
  );
}






class EditEmployee extends React.Component {
  customID = this.props.id;

  state = {
    employeeData: {
      firstname: this.props.firstname,
      lastname: this.props.lastname,
    },
    checkedA: true, 
    checkedB: true,
    checkedF: true,
    checkboxes: []
  };

  handleSubmit = (e, updateEmployee) => {

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

  handleModal = () => {
    console.log("Successfully Submitted.");
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
    this.setState(curState);
    console.log(this.state);
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


    const resEmployees = await client.query({ query: gql(getEmployee), variables: {id: this.customID} });

    console.log(this.state.employeeData.firstname);
    console.log(resSkills.data.listSkills.items);
    console.log(resEmployees);
    console.log(resEmployees.data.getEmployee.skills.items[0]);
    //resSkills.data.listSkills.items
    let items = resSkills.data.listSkills.items;
    let empSkills = resEmployees.data.getEmployee.skills.items;
    console.log(empSkills);
    let index = 0;
    let curState = this.state;
    for (index = 0; index < items.length; index++) { 
      curState.checkboxes[items[index].id] = false;
    } 
    let j = 0;
      for (j = 0; j < empSkills.length; j++){
        console.log(empSkills[j]);
        curState.checkboxes[empSkills[j].skill.id] = true;
      }
    this.setState(curState)
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
            <h4>Modal Header</h4>
            <Mutation mutation={gql(updateEmployee)}>
              {updateEmployee => {
                return (
                  <form
                    className="add-employee"
                    onSubmit={e => this.handleSubmit(e, updateEmployee)}
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
          </div>
            
                  </form>



                );
              }}
            </Mutation>

                <form
                  className="add-employee"
                  onSubmit={e => this.handleSubmit(e, updateEmployee)}
                >


<FormGroup row>


                    <Query query={gql(listSkills)}  >
                      {({loading, data, error, subscribeToMore }) => {

                        if (loading) return <p>loading...</p>
                        if (error) return <p>{error.message}</p>

                        return data.listSkills.items.map((skill) => {
                          console.log(this.state.checkboxes[skill.id]);

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
    </FormGroup>


            <button type="submit" className="modal-close waves-effect waves-red btn-flat">
              Submit
            </button>
            <a className="modal-close waves-effect waves-red btn-flat">
              Cancel
            </a>
                    </form>



              
          </div>
        </div>
      </div>
    );
  }
}

export default withApollo(EditEmployee);




