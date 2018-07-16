import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import VideoListItem from './VideoListItem';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('VideoListItem component testing', function() {
  it('renders VideoListItem and props', function() {
    const wrapper = shallow(<VideoListItem />); 
    expect(wrapper).not.to.be.undefined;
    expect(wrapper.props('item')).not.to.be.undefined;
    expect(wrapper.props('item')).to.be.an('object');
  });
});