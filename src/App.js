import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import NavigationBar from './Components/NavigationBar'
import theme from './Components/Theme'
import SideDrawer from './Components/SideDrawer'
import Hero from './Components/Hero'
import FloatingActionButtons from './Components/FloatingActionButtons'
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience'
// import Education from './Components/Education'
import GetInTouch from './Components/GetInTouch'


export class App extends React.Component {

  state = {
    sideDrawerOpen: false
  }

  openSideDrawer = () => {
    this.setState({sideDrawerOpen: true})
  }

  closeSideDrawer = () => {
    this.setState({sideDrawerOpen: false})
  }

  drawerToggleButtonClicked = () => {
    this.setState( (prevState) => {
      console.log(prevState)
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FloatingActionButtons></FloatingActionButtons>
        <SideDrawer open={this.state.sideDrawerOpen} closeSideDrawer={this.closeSideDrawer}/>
        <NavigationBar drawerClickHandler={this.drawerToggleButtonClicked}/>
        <Hero /> 
        <AboutMe />
        <Experience />
        {/* <Education /> */}
        <GetInTouch />
      </ThemeProvider>
    );
  }
}

export default App;