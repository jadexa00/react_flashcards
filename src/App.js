import React, { Component } from 'react';
import {Container, Header, } from "semantic-ui-react"
import FlashCard from "./flashers/FlashCard.js"


class App extends Component {
  state = { 
    flashCards: [
      { id: 1, flashFront: "What is Cody's Last Name?", flashBack: "Nguyen"},
      { id: 2, flashFront: "What is Jade's Last Name?", flashBack: "Xa" },
      { id: 3, flashFront: "What is 9 - 8", flashBack: "1" },
    ],
  }


render() {
  return(
    <Container style={{ paddingTop: "40px"}}>
      <Header as="h2">
         <FlashCard flashcards  = {this.state.flashCards} />
      </Header>
     </Container>

   )
  } 
}

export default App;
