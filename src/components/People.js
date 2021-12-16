import { Component } from "react";

export default class People extends Component {
  constructor() {
    super();

    this.state = {
      apiData: [],
      displayValue: "",
      answer: null,
    };
  }

  fetchData = async () => {
    let res = await fetch("https://ghibliapi.herokuapp.com/people");
    let data = await res.json();
    this.setState({
      apiData: data,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let details = this.state.apiData.find((item) => {
      return item.name.toLowerCase() === this.state.displayValue;
    });

    this.setState({
      answer: details ? this.renderTitle(details) : "Not Found",
    });
  };

  handleChange = (event) => {
    this.setState({ displayValue: event.target.value.toLowerCase().trim() });
  };

  renderTitle = (details) => {
    return (
      <div className="person-container">
        <h3 className="person-name">Name: {details.name}</h3>
        <h3 className="person-age">Age: {details.age}</h3>
        <h3 className="person-gender">Gender: {details.gender}</h3>
      </div>
    );
  };

  render() {
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Find Your Person"
            value={this.state.displayValue}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.answer}
      </div>
    );
  }
}
