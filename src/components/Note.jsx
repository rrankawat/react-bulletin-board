import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      style: {
        right: this.randomBetween(0, window.innerWidth - 150, 'px'),
        top: this.randomBetween(0, window.innerHeight - 150, 'px')
      }
    };
  }

  randomBetween(x, y, s) {
    return x + Math.ceil(Math.random() * (y - x)) + s;
  }

  save = () => {
    this.props.onChange(this.refs.newText.value, this.props.note.id);
    this.setState({ editing: false });
  };

  renderForm() {
    return (
      <div className="note" style={this.state.style}>
        <textarea ref="newText" defaultValue={this.props.note.note}></textarea>
        <button onClick={this.save}>SAVE</button>
      </div>
    );
  }

  edit = () => {
    this.setState({ editing: true });
  };

  remove = note => {
    this.props.onRemove(note.id);
  };

  renderDisplay() {
    const { note } = this.props;

    return (
      <div className="note" style={this.state.style}>
        <p>{note.note}</p>
        <span>
          <button onClick={this.edit}>EDIT</button>
          <button onClick={() => this.remove(note)}>X</button>
        </span>
      </div>
    );
  }

  render() {
    return (
      <div>{this.state.editing ? this.renderForm() : this.renderDisplay()}</div>
    );
  }
}

export default Note;
