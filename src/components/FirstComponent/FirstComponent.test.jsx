import React, { addons } from 'react/addons'
import expect from 'expect.js'
import FirstComponent from './FirstComponent'

const { describe, it } = global
const { TestUtils } = addons

describe('Component: FirstComponent', () => {
  it('has first-component class', () => {
    const firstComponent = TestUtils.renderIntoDocument(<FirstComponent/>)
    const firstCmpNode = React.findDOMNode(firstComponent)
    expect(firstCmpNode.classList.contains('first-component')).to.equal(true)
  })

  it('sets default greeting to World', () => {
    const firstComponent = TestUtils.renderIntoDocument(<FirstComponent/>)
    const firstCmpNode = React.findDOMNode(firstComponent)
    expect(firstCmpNode.textContent).to.equal('FirstComponent and propValue: value')
  })

  it('sets greeting to name value', () => {
    const firstComponent = TestUtils.renderIntoDocument(<FirstComponent propValue='Another value'/>)
    const firstCmpNode = React.findDOMNode(firstComponent)
    expect(firstCmpNode.textContent).to.equal('FirstComponent and propValue: Another value')
  })
})
