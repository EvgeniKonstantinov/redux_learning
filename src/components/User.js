import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка попробуйте позже!</p>
    }
    if (isFetching) {
      return <p>Download...</p>
    }
    if (name) {
      return <p>Hello, {name}</p>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Войти
        </button>
      )
    }
  }
  render() {
    return <div className="user">{this.renderTemplate()}</div>
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
}
