import {Component} from 'react'
import './index.css'

const HEADS_URL_IMG = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_URL_IMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_URL_IMG,
    HeadsCount: 0,
    TailsCount: 0,
  }

  onTossCoin = () => {
    const {TailsCount, HeadsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = HeadsCount
    let latestTailsCount = TailsCount

    if (tossResult === 0) {
      tossImage = HEADS_URL_IMG
      latestHeadCount += 1
    } else {
      tossImage = TAILS_URL_IMG
      latestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      HeadsCount: latestHeadCount,
      TailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, TailsCount, HeadsCount} = this.state
    const totalCount = TailsCount + HeadsCount

    return (
      <div className="main-container">
        <div className="white-container">
          <div className="text-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="para">Heads (or) Tails</p>
            <img
              src={tossResultImage}
              className="toss-image"
              alt="toss result"
            />
            <button
              type="button"
              onClick={this.onTossCoin}
              className="toss-btn"
            >
              Toss Coin
            </button>
            <div className="list-para">
              <p className="list">Total:{totalCount}</p>
              <p className="list">Heads:{HeadsCount}</p>
              <p className="list">Tails:{TailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
