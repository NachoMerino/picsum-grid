import React, { Component } from 'react';
import { Badge } from 'reactstrap';

class Picture extends Component {

  constructor(props) {
    super(props);
      this.state = {
        url: this.props.url,
        key: this.props.id,
        removePict: this.props.removePict,
        updatePict: this.props.updatePict
      }
  }

  componentWillMount = () => {
    console.log('componentWillMount');
  }
 //Render
  componentDidMount = () => {
    console.log('componentDidMount');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('componentWillReceiveProps');
    this.setState({
      url: nextProps.url
    })
  }

  shouldComponentUpdate = () => {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate = () => {
    console.log('componentWillUpdate');
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render()');
    return (
      <React.Fragment>
      <div className="imgContainer">
        <img className="randompicture" src={this.state.url} alt={this.props.rndNumb} />
        <div className="selectors">
          <span><h6>New <Badge color="secondary" className="more" onClick={this.state.updatePict}>➕</Badge></h6></span>
          <span><h6>Del <Badge color="secondary" className="remove" onClick={this.state.removePict}>❌</Badge></h6></span>
        </div>
      </div>
      </React.Fragment>
      )
  }
}

export default Picture;