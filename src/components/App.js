import React,{Component} from "react";
import Data from "../mock/countryRegionMock";
import RegionCountryList from "./regionCountryList";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Regions</h1>
        <h2>{this.props.heading}</h2>
        <RegionCountryList Content={this.props.Content} />
      </div>
    );
  }
}
App.defaultProps = { Content: Data }
export default App;