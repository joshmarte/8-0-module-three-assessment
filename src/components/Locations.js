import { Component } from "react";

export default class Locations extends Component {
  constructor() {
    super();

    this.state = {
      apiData: [],
      submited: false,
    };
  }

  fetchData = async () => {
    let res = await fetch("https://ghibliapi.herokuapp.com/locations");
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

    this.setState({
      submited: !this.state.submited,
    });
  };

  renderTitle = () => {
    if (this.state.submited) {
      let dataComp = this.state.apiData.map((item) => {
        return (
          <li className="location-container" key={item.id}>
            <h3 className="location-name">Name: {item.name}</h3>
            <h3 className="location-climate">Climate: {item.climate}</h3>
            <h3 className="location-terrain">Terrain: {item.terrain}</h3>
          </li>
        );
      });
      return dataComp;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            {this.state.submited ? "Hide Locations" : "Show Locations"}
          </button>
        </form>
        <ul>{this.renderTitle()}</ul>
      </div>
    );
  }
}
