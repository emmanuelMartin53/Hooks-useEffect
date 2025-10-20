import { Component } from "react";

class ClassCount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }


  componentDidMount = () => {
    // console.log("Je suis dans CDM")
    document.title = `Vous avez cliqué ${this.state.count} fois`
  }

  componentDidUpdate = (prevProps, prevState) => {
     document.title = `Vous avez cliqué ${this.state.count} fois`
  }


  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="btn btn-primary rounded-pill" onClick={() => this.setState({count: this.state.count + 1})}>Cliquez</button>
      </div>
    )
  }
}
export default ClassCount;
