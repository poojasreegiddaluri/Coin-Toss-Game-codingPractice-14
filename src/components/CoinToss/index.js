// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {tossResult: headsImg, Heads: 0, Tails: 0, total: 0}

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    let tossImg = ''
    if (tossResult === 0) {
      tossImg = headsImg
      this.setState(prevState => ({Heads: prevState.Heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({tossResult: tossImg})
    } else {
      tossImg = tailsImg
      this.setState(prevState => ({Tails: prevState.Tails + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({tossResult: tossImg})
    }
  }

  render() {
    const {tossResult, Heads, Tails, total} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResult} alt="toss result" className="image" />
          <button type="button" onClick={this.onToss} className="button">
            Toss Coin
          </button>
          <div className="footer-section">
            <p className="total">Total: {total}</p>
            <p className="total">Heads: {Heads}</p>
            <p className="total">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
