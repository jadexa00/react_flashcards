import React from "react";
import { Button, Table, } from "semantic-ui-react";

const FlashCard = (props) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Flash cards</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      
      {
        props.flashcards.map( flashcard => ( 
          <Table.Row key={flashcard.id}>
            <Table.Cell>{flashcard.flashFront}</Table.Cell>
            <Table.Cell>{flashcard.flashBack}</Table.Cell>
            <Table.Cell>
              <Button color="blue">
                Flip card
              </Button>
              {/* <Button onClick={this.toggle} color="red">Delete Card</Button> */}
            </Table.Cell>
          </Table.Row> 
        ))
      }
    </Table.Body>
  </Table>
);

export default FlashCard;