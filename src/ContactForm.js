import React, { Component } from 'react';
import './selectize.css';
import './UserProfile.css';
import {MultiSelect} from 'react-selectize';

class ContactForm extends Component {
  constructor(){
    super()
    this.state = {
      itemSelected: 0
    };
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="ContactForm">
        <form className="contact-form" name="contact-form">
            <div className="inputContainer">
                <MultiSelect
                    placeholder = {this.props.searchForText("Select contacts")}
                    options = {["Andres@me.com", "Acevedo@appleseed.com", "Bertha@microsoft.com", "Diana@google.com"].map(
                    fruit => ({label: fruit, value: fruit})
                    )}
                    onValuesChange = {value => console.log(value)}
            />    
            </div>
            <div className="inputContainer">
            <label htmlFor="subject">{this.props.searchForText("Subject")}</label><br />
            <input id="subject" placeholder={this.props.searchForText("You can add a subject")}/></div>
            <div className="inputContainer">
            <label htmlFor="message">{this.props.searchForText("Message")}</label> <br />
            <textarea id="message" placeholder={this.props.searchForText("Leave your message here")} rows="5"></textarea>
            </div>
        </form>
        <div className="buttons-area">
            <input type="checkbox" defaultChecked={true} value="save"/> {this.props.searchForText("Save a copy")}
            <button className="send-btn">{this.props.searchForText("Send Mail")}</button>
        </div>
      </div>
    );
  }

  selectItem(i){
    this.setState({itemSelected: i})
  }
}

export default ContactForm;
