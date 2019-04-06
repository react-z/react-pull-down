/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import PullDown from '../ReactPullDown'

test('PullDown renders correctly and matches snapshot', () => {
  const component = renderer.create(<PullDown />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('PullDown renders the correct elements', () => {
  const wrapper = shallow(<PullDown />)

  expect(wrapper.find('div').length).toEqual(2)
  expect(wrapper.find('#pull-down').length).toEqual(1)
  expect(wrapper.find('svg').length).toEqual(1)
})
