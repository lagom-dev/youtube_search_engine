import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import VideoList from './VideoList';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('VideoList component testing', function() {
  it('renders VideoList and props', function() {
    const wrapper = shallow(<VideoList />); 
    expect(wrapper).not.to.be.undefined;
    expect(wrapper.props('videos')).not.to.be.undefined;
   
  });
});