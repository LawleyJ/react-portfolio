import React, { Component } from 'react';
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";
import AboutSubheading from './AboutSubheadings';
import subheadingsData from './subheadingsData';
import AboutMenuItem from './AboutMenuItems';


export default class AboutMenu extends Component {

  constructor (props) {
    super(props);
    this.state = {
      activeMenuItem: 1, 
      activeSubheading:1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem, 
      activeSubheading: 1,
    });
  }

  handleSubheadingClick = (subHeading) => {
    this.setState({
      
      activeSubheading: subHeading,
    });
  }

  render() {
    const {activeMenuItem, activeSubheading} = this.state;
    const menuItems = ["PERSONAL", "CAREER", "EDUCATION","LINKS"];
    const activeMenuTitle = menuItems[activeMenuItem -1];
    const activeMenuIcon = 
      activeMenuTitle === "PERSONAL" ? personalIcon : activeMenuTitle === "EDUCATION" ? educationIcon : careerIcon;

    const subHeadings = subheadingsData[activeMenuItem];





    return (
      <>
        <div className="menu">
            
            {menuItems.map((item, index) => (
              <AboutMenuItem 
                key = {index}
                title = {item}
                active = {activeMenuItem === index + 1}
                onClick={() => this.handleMenuItemClick(index + 1)}
              />
            ))}
        </div>
        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon"/>
            <h3>{activeMenuTitle}</h3>
          </div>
          <div className="sub-container-content">
            {subHeadings.map((subheading, index) => (
              <AboutSubheading
                key = {index}
                title = {subheading.title}
                content = {subheading.content}
                icon = {subheading.icon}

                active = {activeSubheading === index + 1}
                onClick={() => this.handleSubheadingClick(index + 1)}
                menuItem = {activeMenuItem}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}
