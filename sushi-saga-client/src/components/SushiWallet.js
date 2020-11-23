import React, { Component, Fragment } from 'react'

export default class SushiWallet extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.updateMoney(this.state.value)
        this.setState({
            value: 0
        })

    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }

    render(){
        return(
            <Fragment>
                <h1>MONEY MACHINE BONUS DOUBLE TIME</h1>
                <form>
                    <lable>
                        HOW MUCH YOU WANNA ADD?
                        <input type="number" name="amount" onChange={(e) => this.handleChange(e)} value={this.state.value}/>
                    </lable>
                    <input type="submit" value="ADD IT!" onClick={(e) => {this.handleClick(e)}}/>
                </form>
            </Fragment>


        )
    }


}