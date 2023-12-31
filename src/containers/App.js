import React from "react";
import { SearchBox } from "../components/searchbox";
import {Cardlist} from "../components/Cardlist";
import "./App.css";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends React.Component {
    constructor(){
       //console.log("constructor");
        super();
        this.state = {
            robots : [],
            searchfield : "",
            
        }
    }
    componentDidMount(){
        //console.log("componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
    }

    SearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }


    render() {
        //console.log("render");
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());})

        return !robots.length ?
            <h1 className="tc flex items-center justify-center">Loading</h1>
        : (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox onChange={this.SearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
        )
    }
  }



export default App;