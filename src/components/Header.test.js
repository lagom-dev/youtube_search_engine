import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header component testing', function() {
  it('renders header and props', function() {
    const wrapper = mount(<Header />); 
    expect(wrapper).not.to.be.undefined;
    expect(wrapper.props()).not.to.be.undefined;
  });
});

