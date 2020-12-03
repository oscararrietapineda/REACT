import React from 'react';
import './Reloj.css';

class Reloj extends React.Component {
  constructor(props) {
    super(props); // Invoca al constructor base
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.iteración(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  iteración() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Reloj!</h1>
        <h2>Tiempo Actual {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
    
export default Reloj;