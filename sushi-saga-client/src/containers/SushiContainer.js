import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


export default class SushiContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      sushis: [],
      position: 0
    }


  }
  
  getMore = () => {
    console.log("stuff")
    let newPosition = this.state.position + 4
    if (newPosition + 3 > this.state.sushis.length){
      newPosition = 0
    }
    this.setState({
      position: newPosition
    })
    console.log(this.state.position)
  }


  componentDidMount() {
    fetch("http://localhost:3000/sushis")
    .then(resp => resp.json())
    .then(sushis => {
      sushis.forEach(function(sushi){
        sushi.eaten = false
      })
      this.setState({
        sushis: sushis
      })
    })

  }



  renderSushis = () => {
    if (this.state.sushis.length > 0) {
      let visible = []
      for( let i = 0; i < 4; i += 1){
        let sushi = this.state.sushis[i + this.state.position]
        visible[i] = sushi
      }
      return visible.map(sushi => {
        return(<Sushi key={sushi.id} info={sushi} eatSushi={this.props.eatSushi}/>)
      })
    }


    return(<p>It has not yet broken</p>)
  }
  render() {
        return (
          <Fragment>
            <div className="belt">
              {this.renderSushis()}
              <MoreButton getMore={this.getMore}/>
            </div>
            <div>
              
            </div>
          </Fragment>
        )
      }
}