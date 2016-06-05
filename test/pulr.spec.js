import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Pulr from '../src/ReactPulr'

test('Pulr component', (t) => {
  setupJsdom()

  const wrapper = mount(<Pulr />)

  t.pass(
    expect(wrapper.props().children).toEqual()
  )

  t.end()
});
