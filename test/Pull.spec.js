import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import PullDown from '../src/ReactPullDown'

test('PullDown component', (t) => {
  const wrapper = mount(<PullDown />)

  t.pass(
    expect(wrapper.props().children).toEqual()
  )

  t.end()
});
