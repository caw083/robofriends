import React from "react";

class SearchBox extends React.Component {
    render(){
        return (
         <div className="p2">
            <input
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="search robots"
            onChange={this.props.onChange} />
        </div>
        )
    }
}
const SearchBoxHook = (props) => {
    return (
        <div className="p2">
           <input
           className="pa3 ba b--green bg-lightest-blue" 
           type="search" 
           placeholder="search robots"
           onChange={props.onChange} />
       </div>
       )
  
 };

export {SearchBox, SearchBoxHook};