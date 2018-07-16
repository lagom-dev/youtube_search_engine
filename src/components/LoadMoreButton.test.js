import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import LoadMoreButton from './LoadMoreButton';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('LoadMoreButton component testing', function() {
  it('renders LoadMoreButton and props', function() {
    const wrapper = shallow(<LoadMoreButton />); 
    expect(wrapper).not.to.be.undefined;
    expect(wrapper.props('display', 'onClick')).not.to.be.undefined;
   
  });
});