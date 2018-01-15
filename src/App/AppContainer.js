import React from 'react'
import App from './App'
import levels from './../consts/levels'

const LEVEL_TIME = 900;
const BREAK_TIME = 1200;

export class AppContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentLevel: null,
      currentLeveLTimeLeft: null
    }
  }

  componentDidMount() {
    this.loadLevel()
    this.startLevel()
  }

  loadLevel(levelIndex = 0) {
    const {
      type,
      small,
      big,
      ante,
      value
    } = levels[levelIndex]
    const nextLevel = levels[levelIndex + 1]
    this.setState({
      currentLevel: levels[levelIndex].value,
      currentBlinds: {
        small,
        big,
        ante,
      },
      nextBlinds: {
        small: nextLevel.small,
        big: nextLevel.big,
        ante: nextLevel.ante,
      },
      currentLeveLTimeLeft: LEVEL_TIME
    })
  }

  startLevel() {
    this.timer = setInterval(() => {
      this.setState({
        currentLeveLTimeLeft: this.state.currentLeveLTimeLeft - 1
      });
    }, 1000)
  }


  render() {
    return (
      <App {...this.props} {...this.state} />
    )
  }

}

export default AppContainer