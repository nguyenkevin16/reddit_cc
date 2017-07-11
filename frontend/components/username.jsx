import React from 'react';

class UsernameForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='username-form' onSubmit={ this.handleSubmit }>
        <h1>Username</h1>

        <div className='username-input'>
          <input type='text'
                className='username' 
                onChange={ this.handleChange } 
                value={ this.state.formula } />
          <input type="submit" 
                value="Submit" 
                className='username-submit'/>
        </div>
      </form>
    );
  }
}

export default UsernameForm;