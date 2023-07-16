import React from "react";
import { SearchBox, SearchBoxHook } from "../components/searchbox";
import  {robots} from "../robot";
import {Cardlist} from "../components/Cardlist";
import "./App.css";

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
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})
        return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox onChange={this.SearchChange}/>
            <Cardlist robots={filteredRobots} />
        </div>
        )
  }
}


export default App;