/* eslint-disable */
const { capitalize } = require('../../../utils/capitalize')
const generateUiElementAppJs = (name) => `
import React from 'react'
import ${capitalize(name)} from './remote/${name}'

export default function App() {
  return <${capitalize(name)}/>
}
`

module.exports = { generateUiElementAppJs }
