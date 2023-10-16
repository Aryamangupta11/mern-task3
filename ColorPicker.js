import React, { Component } from 'react';
import './App.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: '#000000', // Initial color (black)
    };
  }

  handleColorChange = (event) => {
    this.setState({ selectedColor: event.target.value });
  };

  render() {
    const { selectedColor } = this.state;

    return (
      <div>

        <h2>Color Picker</h2>
        <input
          type="color"
          value={selectedColor}
          onChange={this.handleColorChange}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: selectedColor,
            margin: '20px 0',
          }}
        ></div>
        <p>Selected Color: {selectedColor}</p>
      </div>
    );
  }
}

export default ColorPicker;