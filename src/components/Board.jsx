import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  nextId = () => {
    this.uniqueId = this.uniqueId || 1;
    return this.uniqueId++;
  };

  add = text => {
    var notes = [
      ...this.state.notes,
      {
        id: this.nextId(),
        note: text
      }
    ];
    this.setState({ notes });
  };

  remove = id => {
    var notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  };

  update = (newText, id) => {
    console.log(newText, id);
    var notes = this.state.notes.map(note =>
      note.id !== id
        ? note
        : {
            ...note,
            note: newText
          }
    );
    this.setState({ notes });
  };

  render() {
    return (
      <div className="board">
        {this.state.notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onChange={this.update}
            onRemove={this.remove}
          >
            {note.note}
          </Note>
        ))}
        <button onClick={() => this.add(`What's in your mind?`)}>+</button>
      </div>
    );
  }
}

export default Board;
