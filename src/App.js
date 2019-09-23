import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobList from './components/JobList'

class App extends React.Component {
    state = {
        searchKey: 'react',
        jobs: []
    }

    getGitHubJobURL() {
        return `https://jobs.github.com/positions.json?description=${this.state.searchKey}&sort=stars&order=desc`;
    }

    searchHandler(searchKey) {
        this.setState({ searchKey });
        this.fetchData();
    }

    render() {
        return (
            <div>
                <Header text="GitHub Jobs search"></Header>
                <SearchBar 
                    searchHandler={this.searchHandler.bind(this)} 
                    searchKey={this.state.searchKey}>
                </SearchBar>
                <JobList jobs={this.state.jobs}/>
            </div>
        );
    }

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        try {
          const axios=require('axios');

          axios(
            {
              url:this.getGitHubJobURL(),
              method: 'GET',
              credentials: "same-origin", //include, same-origin
              headers: {Accept: 'application/json', 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"},
            })
            .then(response => response.json()
              .then(
                data => this.setState({ jobs: data.items })))
            .catch(error=>console.log(error));
        } catch (error) {
          console.log(error);
        }
    }
}

export default App;
