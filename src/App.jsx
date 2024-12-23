import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  

export default class App extends Component {
    apiKey = "b9ccfe05883b4200814fb184186cf773";

    state = {
        progress: 0,
        mode: 'light'
    }

    toggleMode = ()=>{
        if(this.state.mode==='light'){
            this.setState({mode: 'dark'})
            document.body.style.backgroundColor = '#121212'
        }
        else{
            this.setState({mode: 'light'})
            document.body.style.backgroundColor = 'white'
        }
    }

    setProgress = (progress)=>{
        this.setState({progress: progress})
    }

    render() {
        return (
        <div>
            <Router>
                <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
                <LoadingBar
                    color='#f11946'
                    progress={this.state.progress}
                />
                <Routes>
                    <Route exact path="/" element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="us" category="general" />} />
                    <Route exact path="/Business" element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={5} country="us" category="business" />} />
                    <Route exact path="/Entertainment" element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={5} country="us" category="entertainment" />} />
                    <Route exact path="/General" element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="us" category="general" />} />
                    <Route exact path="/Health" element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={5} country="us" category="health" />} />
                    <Route exact path="/Science" element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={5} country="us" category="science" />} />
                    <Route exact path="/Sports" element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={5} country="us" category="sports" />} />
                    <Route exact path="/Technology" element={<News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={5} country="us" category="technology" />} />
                </Routes>
            </Router>
        </div>
        )
    }
}
