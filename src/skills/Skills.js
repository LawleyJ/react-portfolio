import React, { Component } from 'react';
import SkillsMenu from "./SkillsMenu.js"
import Avatar from '../avatar/Avatar.js';

export default class About extends Component {
  render() {
    return (
      <>
        
        <Avatar page="skills"/>
        <SkillsMenu />

      </>
    )
  }
}