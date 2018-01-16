import React from 'react'
import App from './App'
import levels from './../consts/levels'

const LEVEL_TIME = 900;
const BREAK_TIME = 1200;

export class AppContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isGameFinished: false,
      currentLevel: null,
      currentLeveLTimeLeft: null
    }
  }

  componentDidMount() {
    this.loadLevel(0)
  }

  onLevelClick = (index) => {
    this.stopTimer()
    this.setState({
      isGameFinished: false
    })
    this.loadLevel(index)
  }

  onTimerClick = () => {
    this.timer ? this.stopTimer() : this.startTimer()
  }

  loadLevel = (levelIndex = 0) => {
    const {
      type,
      small,
      big,
      ante,
      value
    } = levels[levelIndex]
    const nextLevel = levels[levelIndex + 1]
    let newState = {
      currentLevel: levelIndex,
      currentBlinds: {
        small,
        big,
        ante,
      },
      nextBlinds: null,
      currentLeveLTimeLeft: type === 'BREAK' ? BREAK_TIME : LEVEL_TIME
    }
    if (nextLevel) {
      newState = Object.assign({}, newState, {
        nextBlinds: {
          small: nextLevel.small,
          big: nextLevel.big,
          ante: nextLevel.ante,
        },
      })
    }
    this.setState(newState)
  }

  startTimer = () => {
    this.timer = setInterval(this.count, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.timer = null;
  }

  onLevelEnd = () => {
    const { currentLevel } = this.state

    if (levels.length > currentLevel + 1) {
      return this.loadLevel(currentLevel + 1)
    }
    this.setState({
      isGameFinished: true
    })

  }

  count = () => {
    const newValue = this.state.currentLeveLTimeLeft - 1
    if (newValue >= 0) {
      this.setState({
        currentLeveLTimeLeft: newValue
      })
    } else {
      this.stopTimer()
      this.onLevelEnd()
    }

  }


  render() {
    return (
      <App
        {...this.props}
        {...this.state}
        onLevelClick={this.onLevelClick}
        onTimerClick={this.onTimerClick}
      />
    )
  }

}

export default AppContainer