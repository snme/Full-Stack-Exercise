import React from 'react';
import EditEmployee from './editEmployee';
import DeleteEmployee from './deleteEmployee';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



class Employee extends React.Component {

  componentDidMount() {
    this.props.subscribeToMore();
  }


  render() {
    console.log(this.props);
    const items = this.props.data.listEmployees.items;
    const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

    /*var newarr = (function(arr){
      var m = {}, newarr = []
      for (var i=0; i<items.length; i++) {
        var v = items[i];
        if (!m[v.name]) {
          newarr.push(v);
          m[v.name]=true;
        }
      }
      return newarr;
    })(items);
    return newarr.map((employee) => {*/
    return items.map((employee) => {
      return (
        <div style={{ padding: 20}}>
        <Grid container justify="center" spacing={5}>
  <Grid container item justify="center" xs={6} spacing={0}>
  <Typography ><h5>{employee.lastname}, {employee.firstname}</h5> </Typography>
    <div className="col s12"> 
    <h6>
          Created on <time dateTime={employee.createdAt}>
          {new Date(employee.createdAt).toDateString()}</time></h6>
    </div>
    
  </Grid>
  <Grid container item xs >
    <div className="col s12 "> </div>

    <EditEmployee {...employee} />
  </Grid>
  <Grid container item xs>

    <div className="col s12 "> </div>
    <DeleteEmployee {...employee} />
  </Grid>
</Grid>

        </div>
      )
    })


  }

}


export default Employee;