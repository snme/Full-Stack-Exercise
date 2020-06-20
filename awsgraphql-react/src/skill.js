import React from 'react';
import EditSkill from './editSkill';
import DeleteSkill from './deleteSkill';
import Modal from './Modal';



class Skill extends React.Component {

  componentDidMount() {
    this.props.subscribeToMore();
  }


  render() {
    console.log(this.props);
    const items = this.props.data.listSkills.items;

    return items.map((skill) => {
      return (
        <div>
          <h4>{skill.name}</h4>
          <h4>{skill.id}</h4>
          <time dateTime={skill.createdAt}>
          {new Date(skill.createdAt).toDateString()}</time>
          <br />
          <EditSkill {...skill} />
          <DeleteSkill {...skill} />
        </div>
      )
    })


  }

}


export default Skill;