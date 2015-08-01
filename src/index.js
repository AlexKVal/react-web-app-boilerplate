import 'normalize.css'
import './styles.css'

import React from 'react'
import FirstComponent from './components/FirstComponent'

const applicationNode = document.createElement('div')
applicationNode.className = 'application'
applicationNode.id = 'application'

document.body.appendChild(applicationNode)

React.render(<FirstComponent/>, applicationNode, () => {
  console.log('finished mounting application')
})
