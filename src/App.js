import React, { Component } from 'react';
import { Button, Row, Container, Col } from 'reactstrap';
import Picture from './components/Picture';
import './App.css';

class App extends Component {

  state = {
    pictures: [],
    size:100
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  loadPictures = () => {
    const rndNum = this.getRandomInt(1,980);
    this.setState( prevState => {return {
      pictures: [...prevState.pictures, {url:`https://picsum.photos/${this.state.size}/${this.state.size}?image=${rndNum}`}]
    }})
  }

  /*
  removePict = (index) => {
    const pictures = [...this.state.pictures];
    pictures.splice(index, 1);
    this.setState({ pictures });
  }
  */

  removePict = (key) => {
    const pictIndex = this.state.pictures.findIndex(pic=>{
    return key === pic.id
    });
    console.log(pictIndex)
    const pictures = [...this.state.pictures];
    pictures.splice(key, 1);
    this.setState({ pictures });
  }

  updatePict = (index) => {
    const rndNum = this.getRandomInt(1,980);
    let pictures = [...this.state.pictures];
    pictures[index].url = `https://picsum.photos/${this.state.size}/${this.state.size}?image=${rndNum}`
    this.setState({ pictures });
  }


  render() {
    const style = {
      marginTop: '1rem'
    }

    return (
      <div style={style}>
        <Container>
          <Row>
            <h4>Another Picsum Example</h4>
          </Row>
          <Row>
            <Col xs="3">
              <Button color="primary" onClick={this.loadPictures}>New Image</Button>
            </Col>
            <Col xs="9">
              {this.state.pictures.map((picture, index) => {
                return <Picture url={picture.url} key={index} id={index} removePict={()=>{this.removePict(index)}} updatePict={()=> {this.updatePict(index)}}/>
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
