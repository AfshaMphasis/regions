import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../components/App';

configure({ adapter: new Adapter() });

describe('App component', () => {
    test("renders" , ()=>{
        const wrapper = shallow(<App />); 
    expect(wrapper.exists()).toBe(true);
  })});