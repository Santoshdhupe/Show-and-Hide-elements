// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirstNameDisplayed: false, isLastNameDisplayed: false}

  showAndHideFirstName = () => {
    const {isFirstNameDisplayed} = this.state
    if (isFirstNameDisplayed === false) {
      this.setState(() => ({
        isFirstNameDisplayed: true,
        isLastNameDisplayed: false,
      }))
      return <p className="nameContainer">Joe</p>
    }
    return null
  }

  showAndHideLastname = () => {
    const {isLastNameDisplayed} = this.state
    if (isLastNameDisplayed === false) {
      this.setState(() => ({
        isFirstNameDisplayed: false,
        isLastNameDisplayed: true,
      }))
      return <p className="nameContainer">Jones</p>
    }
    return null
  }

  render() {
    return (
      <div className="bgContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="bottomContainer">
          <div className="buttonAndNameCont">
            <button
              className="button"
              onClick={this.showAndHideFirstName}
              type="button"
            >
              Show/Hide Firstname
            </button>
            {this.showAndHideFirstName()}
          </div>
          <div className="buttonAndNameCont">
            <button
              className="button"
              onClick={this.showAndHideLastname}
              type="button"
            >
              Show/Hide Lastname
            </button>
            {this.showAndHideLastname()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
