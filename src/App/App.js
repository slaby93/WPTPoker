import React, { Component } from 'react';
import styled from 'styled-components';
import MainDisplayer from './../MainDisplayer'
import ChipsList from './../ChipsList'
import LevelList from './../LevelList'
import Header from './../Header'

class App extends Component {
  render() {
    const {
      className,
      isGameFinished,
      currentLeveLTimeLeft,
      currentLevel,
      currentBlinds,
      nextBlinds,
      onLevelClick,
      onTimerClick
      } = this.props
    return (
      <React.Fragment>
        <div className={className}>
          <Header />
          <LevelList
            currentLevel={currentLevel}
            onLevelClick={onLevelClick}
          />
          {
            isGameFinished
              ? <GameOver>
                <h1></h1>
              </GameOver>
              : <MainDisplayer
                time={currentLeveLTimeLeft}
                currentLevel={currentLevel}
                currentBlinds={currentBlinds}
                nextBlinds={nextBlinds}
                onTimerClick={onTimerClick}
              />
          }
          <ChipsList />
          <Logo>
            <img src='http://www.knmf.im.uj.edu.pl/wp-content/uploads/2017/05/logo_knmfuj_150.png' />
          </Logo>
        </div>
      </React.Fragment>
    );
  }
}

const GameOver = styled.div`
    font-weight: BOLD;
    font-size: 150px;
    align-self: center;
    justify-self: center;
`

const StyledComponent = styled(App) `
  height: 100vh;
  width: 100vw;
  background: radial-gradient(ellipse at center, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%);

  display: grid;
  grid-template-rows: 250px auto;
  grid-template-areas: "logo h h h h" 
                       "l m m m c";
  ${Header}{
    grid-area: h;
  }
  ${LevelList}{
    grid-area: l;
  }
  ${MainDisplayer}, ${GameOver} {
    grid-area: m;
  }
  ${ChipsList}{
    grid-area: c;
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export default StyledComponent;
