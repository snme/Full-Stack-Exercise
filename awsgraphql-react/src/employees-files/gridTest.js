import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import _ from "lodash";

class CheckboxItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentDidMount() {
    this.setDefaultState();
  }

  setDefaultState() {
    const { data, colDef, api } = this.props;
    const { externalData } = api;
    if (externalData && externalData.length > 0) {
      if (_.find(data.roles, _.matchesProperty("name", colDef.headerName))) {
        this.setState({
          value: true
        });
      }
    }
  }

  updateGridAssociation(checked) {
    const { data, colDef } = this.props;
    // const { externalData, entitySpec, fieldSpec } = this.props.api;
    // console.log(data);
    // console.log(colDef);
    if (checked) {
      this.props.api.assign(data.id, colDef.id);
      return;
    }
    this.props.api.unassign(data.id, colDef.id);
    return;
  }

  handleCheckboxChange(event) {
    const checked = !this.state.value;
    this.updateGridAssociation(checked);
    this.setState({ value: checked });
  }

  render() {
    return (
      <Checkbox
        checked={this.state.value}
        onChange={this.handleCheckboxChange}
      />
    );
  }
}


