import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SkillsPage from './skills-page.js';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={SkillsPage}></Route>
      <Route exact path='/employees' component={SkillsPage}></Route>
      <Route exact path='/skills' component={SkillsPage}></Route>
    </Switch>
  );
}

export default Main;