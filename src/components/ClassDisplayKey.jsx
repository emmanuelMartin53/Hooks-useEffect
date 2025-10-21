import { Component} from "react";


class ClassDisplayKey extends Component {

  constructor(props) {
    super(props)

    this.state = {
       keyCode: null
    }
  }

  handleKeyCode = (event) =>{
    // console.log(event.code)
    this.setState({
      keyCode: event.code
    })
  }

  componentDidMount = () => {
    document.addEventListener("keyup", this.handleKeyCode)
  }


  componentWillUnmount = () => {
    console.log("addEventlistener arrété")
    document.removeEventListener("keyup", this.handleKeyCode)
  }


  render () {

    const {keyCode} = this.state;

    return (
        <div className="card">
            <div className="card-body">
              <h1 className="text-center">{keyCode}</h1>
            </div>
        </div>
    )
  }
}
export default ClassDisplayKey
