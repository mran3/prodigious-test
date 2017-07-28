import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(){
    super()
    this.state = {
      itemSelected: 0
    };
  }

  componentDidMount(){
    fetch('http://www.mocky.io/v2/597812731300002402c0fd80')
    .then(function(response) { 
      return response.json()
    }).then(function(json) {
      //console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <div className="UserProfile">
        <div className="hero">
            
        </div>
        <div className="profile-info">
          <div className="profile-photo">
          </div>
          
          <div className="profile-name">
            <h2>  Andrés Acevedo</h2>
            <p>{this.props.searchForText('Your talent amazes! This is awesome.')} <br />
            {this.props.searchForText('Excited to see the final product.')}
            
            </p>
          </div>

          <div className="lower-icons">
            <div className="icon"><img id="eye-icon" src="img/sprite.png" alt=""/>172</div>
            <div className="icon"><img id="comment-icon" src="img/sprite.png" alt=""/>34</div>
            <div className="icon" style={{color:'#e26f4d'}}><img id="heart-icon" src="img/sprite.png" alt=""/>210
            
            
            </div>
          </div>
            
            
        </div>
      </div>
    );
  }

  selectItem(i){
    this.setState({itemSelected: i})
  }
}

export default UserProfile;
