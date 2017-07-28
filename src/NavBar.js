import React, { Component } from 'react';
// import logo from './logo.svg';

class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      itemSelected: 0
    };
  }

  render() {
    return (
      <div className="NavBar">
        <nav className="widgets-menu">
            <div className={"widgets-menu_item" + (this.state.itemSelected===0 ? ' selected':'')}  onClick={()=>{this.selectItem(0)}}>
                <div className="notifications-number">3</div>
                <img className="menu-icon location-icon" src="img/sprite.png" alt=""/><span>{this.props.searchForText('home')}</span>
            </div>        
            <div className={"widgets-menu_item" + (this.state.itemSelected===1 ? ' selected':'')} onClick={()=>{this.selectItem(1)}}>
                <img className="menu-icon heart-icon" src="img/sprite.png" alt=""/><span>{this.props.searchForText('account')}</span>
            </div>        
            <div className={"widgets-menu_item" + (this.state.itemSelected===2 ? ' selected':'')} onClick={()=>{this.selectItem(2)}}>
                <img className="menu-icon account-icon " src="img/sprite.png" alt=""/><span>{this.props.searchForText('contacts')}</span>
            </div>        
            <div className={"widgets-menu_item" + (this.state.itemSelected===3 ? ' selected':'')} onClick={()=>{this.selectItem(3)}}>
                <img className="menu-icon settings-icon" src="img/sprite.png" alt=""/><span>{this.props.searchForText('settings') }</span>
            </div>
        </nav>
      </div>
    );
  }

  selectItem(i){
    this.setState({itemSelected: i})
  }
}

export default NavBar;
