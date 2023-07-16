import React from "react";
import { SearchBox, SearchBoxHook } from "./components/searchbox";
import  {robots} from "./robot";
import {Cardlist} from "./components/Cardlist";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots : robots,
            searchfield : "",
            
        }
    }
    SearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        this.setState({robots: robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })})
    }


    render() {
        return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox onChange={this.SearchChange}/>
            <Cardlist robots={this.state.robots} />
        </div>
        )
  }
}

const AppHook = () => {
    return ( 
    <div>
        <h1>RoboFriends</h1>
        <SearchBoxHook />
        <Cardlist robots={robots} />
    </div>
    );

}

export default App;