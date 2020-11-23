import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      money: 100
    }
  }
  eatSushi = (sushiInfo) => {
    if (this.state.money >= sushiInfo.price){
      sushiInfo.eaten = true
      let newMoney = this.state.money - sushiInfo.price
      this.setState({
        money: newMoney
      })
    }
  }
  updateMoney = (value) => {
    console.log('money updated')
    let newMoney = this.state.money + parseInt(value)
    this.setState({
      money: newMoney
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi}/>
        <Table money={this.state.money} updateMoney={this.updateMoney}/>
      </div>
    );
  }
}

export default App;