import './App.css';
// import styled from './styled'
import React, { Component } from 'react';

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from './component/Navbar';
import News from './component/News';

export class App extends Component {
  pageSize=5;
  apiKey="107632b20b124b7c81523cabd47635ee"
  state={
    progress:0
  }
  setProgress=(progress)=> {
    this.setState({progress:progress});
  }

  render() {
    return (
    
      <div>
        <Router>

        
          <Navbar />
          <LoadingBar
        color="#f11946"
        progress={this.state.progress}
         />
      
    
          <Routes>



            <Route  path="/" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} exect/> 
            <Route  path="/business" element={ <News  setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" />}exect />
            <Route  path="/entertainment" element={ <News  setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} exect/>
            <Route  path="/general" element={ <News  setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} exect/>
            <Route  path="/health" element={ <News  setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />}exect />
            <Route  path="/science" element={ <News  setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />} exect/>
            <Route  path="/sports" element={ <News  setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />}exect />
            <Route  path="/technology" element={ <News  setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} exect
 />

          </Routes> 
        </Router>
      </div>
    )
  }
}


export default App    