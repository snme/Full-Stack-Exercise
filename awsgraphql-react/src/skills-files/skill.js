import React from 'react';
import EditSkill from './editSkill';
import DeleteSkill from './deleteSkill';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



class Skill extends React.Component {

  componentDidMount() {
    this.props.subscribeToMore();
  }


  render() {
    console.log(this.props);
    const items = this.props.data.listSkills.items;
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

    return items.map((skill) => {
      return (
        <div style={{ padding: 20}}>
        <Grid container justify="center" spacing={5}>
  <Grid container item justify="center" xs={6} spacing={0}>
  <Typography ><h5>{skill.name}</h5> </Typography>
    <div className="col s12"> 
    <h6>
          Created on <time dateTime={skill.createdAt}>
          {new Date(skill.createdAt).toDateString()}</time></h6>
    </div>
    
  </Grid>
  <Grid container item xs >
    <div className="col s12 "> </div>

    <EditSkill {...skill} />
  </Grid>
  <Grid container item xs>

    <div className="col s12 "> </div>
    <DeleteSkill {...skill} />
  </Grid>
</Grid>

        </div>
      )
    })


  }

}


export default Skill;