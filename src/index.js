import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { ThemeProvider } from 'emotion-theming'

const defaultTheme = {
  color: {
    white: '#fff',
    black: '#000',
    accent: '#ff5500',
  },
  button: {
    background: '#666',
    text: '#fff',
    disabled: {
      background: '#888',
      text: '#ddd',
    },
  },
  header: {
    background: '#333',
    text: '#fff',
  },
  navigation: {
    background: '#fff',
  },
  postItem: {
    hover: '#eee',
    time: '#444',
    title: '#222',
    permalink: '#000',
    user: '#ff5500',
    wrapper: {
      background: '#000',
      border: '1px solid #666',
    },
  },
}

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
