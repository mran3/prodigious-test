import React, { Component } from 'react';
import './index.css';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
import ContactForm from './ContactForm';

class ProdigiousTest extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemSelected: 0,
      currentLanguage: 'esp'
    };
  }

  componentDidMount(){
    
  }

  searchForTextInChild(text){
      if(this.props.dict[this.state.currentLanguage]){
        return this.props.dict[this.state.currentLanguage][text] || text
      } else {
          return text
      }
      
  }

  changeLanguage(lang){
      this.setState({currentLanguage:lang})
  }


  render() {
    return (
        <div className="mainContainer">
            <div className="flags">
                <img className="menu-icon spanish-flag" src="/img/flags.png" alt="" onClick={()=>{this.changeLanguage('esp')}}/>
                <img className="menu-icon english-flag" src="/img/flags.png" alt="" onClick={()=>{this.changeLanguage('eng')}}/>
            </div>
            <div className="ProdigiousTest">
                <NavBar searchForText={this.searchForTextInChild.bind(this)}/>
                <UserProfile searchForText={this.searchForTextInChild.bind(this)}/>
                <ContactForm searchForText={this.searchForTextInChild.bind(this)}/>
            </div>
        </div>
    );
  }

  selectItem(i){
    this.setState({itemSelected: i})
  }
}

export default ProdigiousTest;
