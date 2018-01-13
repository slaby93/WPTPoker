import React from 'react'
import App from './App'
import levels from './../consts/levels'

export class AppContainer extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      currentLevel: 0,
      levelTime: 900,
      breakTime: 1200
    }
  }


  render() {
    return (
      <App {...this.props} {...this.state}/>
    )
  }

}

export default AppContainer