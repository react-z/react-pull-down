import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Pulr from '../src/ReactPulr'

test('Pulr component', (t) => {

  const wrapper = mount(<Pulr />)

  t.pass(
    expect(wrapper.props().children).toEqual()
  )

  t.end()
});
