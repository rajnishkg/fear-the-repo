import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
// import goHomeActions          from 'actions/goHome';
// changed into the following to get multiple actions:
import * as ActionCreators from 'actions/goHome';

import RaisedButton           from 'material-ui/lib/raised-button';
import TextField              from 'material-ui/lib/text-field';

const mapStateToProps = (state) => ({
  goHome : state.goHome,
  routerState : state.router,
  fuckingfuck: state.someProp
});

const mapDispatchToProps = (dispatch) => ({
  // There are TWO actions coming from ActionCreators via 'actions/goHome.js'
  actions : bindActionCreators(ActionCreators, dispatch)
  // ^ bindActionCreators turns an object whose values are action creators, into an object
  // with the same keys, but with every action creator wrapped into a dispatch call
  // so they may be invoked directly. http://rackt.org/redux/docs/api/bindActionCreators.html
});


export class EditTextView extends React.Component {
  static propTypes = {
    actions : React.PropTypes.object
  }

  handleSubmit (e) {
    console.log('FUCK YOU REACT');
    console.log(this.refs.input.value);
    this.props.actions.saveText(this.refs.input.value);
    this.refs.input.value = '';
  }

  render () {

    return (
      <div className='container'>
      <br />
        <h1>is this thing on?</h1>

          <input type='text' ref='input' />
          <button onClick={e => this.handleSubmit(e)}>
            FUCK REACT
          </button>

        <br/>
        <br/>
        <Link to='/'>but this link will take you back to the counter</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTextView);

// <TextField key="resumeText" hintText="check out the saveText state in dev tools!" hintStyle={{color: 'gray'}} /><br />
//         <RaisedButton label='Save this awesome resume' onClick={this.props.actions.saveText.bind(this)} />
//