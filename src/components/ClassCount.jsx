import { Component } from "react";

class ClassCount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: ""
    }
  }

  componentDidMount = () => {
    // console.log("Je suis dans CDM")
    document.title = `Nouveau titre`
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.state.count !== prevState.count) {
  //     console.log("Mise à jour du titre")
  //     document.title = `Vous avez cliqué ${this.state.count} fois`
  //   }
  // }

  handlerClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


  changeValue = (event) => {
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="btn btn-primary rounded-pill" onClick={this.handlerClick}>Cliquez</button>
        <input type="text" value={this.state.name} onChange={ this.changeValue}/>
      </div>
    )
  }
}
export default ClassCount;
