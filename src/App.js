import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  }

  removeFriend = (id) => {
    console.log(`This removes friend ${id}`)
    const newFriends = this.state.friends.filter(f => f.id !== id) 
    this.setState({friends: newFriends})
  }

  render() {
  return (
    <Wrapper>
      <Title title={'SpongeBob is the G.O.A.T'} />
      {this.state.friends.map(f => {
        return(
        <FriendCard 
        removeFriend = {this.removeFriend}
        key = {f.index}
        id={f.id}
        name={f.name}
        image={f.image}
        occupation={f.occupation}
        location={f.location}
        />
        )
      })}


      
    </Wrapper>
  );
}
}

export default App;