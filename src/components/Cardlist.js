import React from "react";
import { Card } from "./card";

class Cardlist extends React.Component {
  render() {
    return (
      <div>
        {this.props.robots.map ((user)=>{
            return <Card key={user.id} name={user.name} id={user.id} email={user.email} />
        })}
      </div>
    );
  }
}

const CardlistHook = (props)=> {
    return (
        <div>
            {props.robots.map(({id,name, email})=> {
                console.log(id, name, email)
                return <Card key={id} name={name} id={id} email={email} />
            })}

        </div>
    )
}


export { Cardlist, CardlistHook };