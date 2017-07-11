import React from 'react';

class UsernameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A username was submitted: ' + this.state.username);
  }

  render() {
    return (
      <form className='username-form' onSubmit={ this.handleSubmit }>
        <h1>Username</h1>

        <div className='username-input'>
          <input type='text'
                className='username' 
                onChange={ this.handleChange } 
                value={ this.state.username } />
          <input type="submit" 
                value="Submit" 
                className='username-submit'/>
        </div>
      </form>
    );
  }
}

export default UsernameForm;