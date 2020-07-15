import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Message = ({ message }) => (
  <section className="message">
    <p>{message}</p>
  </section>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Message
