import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import MainDisplayer from './../MainDisplayer'
import ChipsList from './../ChipsList'
import LevelList from './../LevelList'
import Header from './../Header'

class App extends Component {
  render() {
    const {className} = this.props
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
  display: grid;
  grid-template-areas: "h h h" 
                       "l m c";
  ${Header}{
    grid-area: h;
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
const Wrapper = styled.div``
export default StyledComponent;
