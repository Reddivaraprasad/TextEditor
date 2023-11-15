import {Component} from 'react'
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'

import './App.css'

class App extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  toggleBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  toggleItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    return (
      <div className="text">
        <div>
          <h1>Text Editor</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </div>
        <div className="data">
          <ul className="styles">
            <li>
              <button
                type="button"
                className="buttons"
                onClick={this.toggleBold}
                style={{color: isBold ? '#faff00' : '#f1f5f9'}}
                data-testid="bold"
                aria-label="Toggle Bold"
              >
                <VscBold size={25} />
              </button>
            </li>

            <li>
              <button
                type="button"
                className="buttons"
                onClick={this.toggleItalic}
                style={{color: isItalic ? '#faff00' : '#f1f5f9'}}
                data-testid="italic"
                aria-label="Toggle Italic"
              >
                <GoItalic size={25} />
              </button>
            </li>
            <li>
              <button
                type="button"
                className="buttons"
                onClick={this.toggleUnderline}
                style={{color: isUnderline ? '#faff00' : '#f1f5f9'}}
                data-testid="underline"
                aria-label="Toggle Underline"
              >
                <AiOutlineUnderline size={25} />
              </button>
            </li>
            <br />
            <hr />
          </ul>
          <textarea
            style={{
              fontWeight: isBold ? 'bold' : 'normal',
              fontStyle: isItalic ? 'italic' : 'normal',
              textDecoration: isUnderline ? 'underline' : 'none',
            }}
          />
        </div>
      </div>
    )
  }
}

export default App
