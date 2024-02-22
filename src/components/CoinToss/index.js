// Write your code here

import {Component} from 'react'

import './index.css'

const coinImageList = [
  {
    id: 'head',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 'tail',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {
    activeImgId: coinImageList[0].id,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickToss = () => {
    const {activeImgId, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let h = heads
    let t = tails
    let imgId = activeImgId
    if (tossResult === 0) {
      h = heads + 1
      imgId = coinImageList[0].id
    } else {
      t = tails + 1
      imgId = coinImageList[1].id
    }

    this.setState({
      total: h + t,
      heads: h,
      tails: t,
      activeImgId: imgId,
    })
  }

  getActiveCoinImage = () => {
    const {activeImgId} = this.state

    const activeImg = coinImageList.find(each => each.id === activeImgId)
    console.log(activeImg.imageUrl)
    return activeImg.imageUrl
  }

  render() {
    const {activeImgId, total, heads, tails} = this.state
    const imageUrl = this.getActiveCoinImage(activeImgId)

    return (
      <div className="app-container">
        <div className="coinTossGame-container">
          <h1>Coin Toss Game</h1>
          <p className="heads-or-tails-txt">Heads (or) Tails</p>
          <img src={imageUrl} className="coin-img" alt="toss result" />

          <button
            type="button"
            className="toss-coin-btn"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>

          <div className="result-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
