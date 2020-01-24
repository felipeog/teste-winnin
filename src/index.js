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
    default: `
      font-size: 1rem;
      padding: 0.8rem;
      display: inline-block;
      background-color: #666;
      border: none;
      border-radius: 0.4rem;
      width: 10rem;
      color: #fff;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      transition: background-color 200ms;
    
      &[disabled] {
        cursor: not-allowed;
        background-color: #888;
        color: $button-text-disabled;
      }`,
    loadMore: `
      margin-top: 1rem;
      font-weight: bold;
      width: 100%;`,
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
