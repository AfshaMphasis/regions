import React from "react";
import ACTION_TYPES from "../actions/actionTypes";
import countriesReducer from "../reducers/countriesReducer";
import { shallow,configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FETCH_SUCCESS from "../actions/actionTypes";
import FETCH_FAIL from "../actions/actionTypes";


configure({ adapter: new Adapter() });

const initialState = { 
    result: '', 
    error: false, 
  }; 
  describe('countriesReducer component', () => {
    test("renders" , ()=>{
        const wrapper = shallow(<countriesReducer />); 
    expect(wrapper.exists()).toBe(true);
  });     
      it('handles FETCH_SUCCESS',()=>{
         let list=[];
        let newState=countriesReducer(undefined,{
          type:FETCH_SUCCESS,
          payload:list
        });
        expect(newState.result).toEqual(list);
      })
      it("handle FETCH_SUCCESS details",()=>{
        let details=[];
        let newState=countriesReducer(undefined,{
          type:ACTION_TYPES.FETCH_SUCCESS,
          payload:details
        });
        expect (newState.result).toEqual(details);
      });
      it('handles FETCH_FAIL',()=>{
        let message=null;
        let newState=countriesReducer(undefined,{
          type:ACTION_TYPES.FETCH_FAIL,
          payload:message
        });
        expect(newState.error).toEqual(message);
   })
  });
   
  