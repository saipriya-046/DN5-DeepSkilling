import React from "react";

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rupees: "", euro: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const rupees = parseFloat(this.state.rupees) || 0;
    const euro = (rupees / 90).toFixed(2);
    this.setState({ euro });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Currency Convertor (INR to EUR)</h2>
        <input
          type="number"
          placeholder="Enter amount in Rupees"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button type="submit">Convert</button>
        {this.state.euro !== null && (
          <p>{this.state.rupees} INR = {this.state.euro} EUR</p>
        )}
      </form>
    );
  }
}

export default CurrencyConvertor;
