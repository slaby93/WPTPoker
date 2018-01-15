import React, { Component } from 'react';
import styled from 'styled-components';
import MainDisplayer from './../MainDisplayer'
import ChipsList from './../ChipsList'
import LevelList from './../LevelList'
import Header from './../Header'

class App extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={className}>
        <Header />
        <LevelList />
        <MainDisplayer />
        <ChipsList />
      </div>
    );
  }
}

const StyledComponent = styled(App) `
  height: 100vh;
  width: 100vw;
  background: radial-gradient(ellipse at center, rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%);

  display: grid;
  grid-template-rows: 200px auto;
  grid-template-areas: "h h h" 
                       "l m c";
  ${Header}{
    grid-area: h;
    height: 200px;
  }
  ${LevelList}{
    grid-area: l;
  }
  ${MainDisplayer}{
    grid-area: m;
  }
  ${ChipsList}{
    grid-area: c;
  }
`
export default StyledComponent;
