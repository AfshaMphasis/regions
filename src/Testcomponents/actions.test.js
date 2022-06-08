import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// import * as actions from '../actions/actions';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();
const initialState = { 
    result: '', 
    error: false, 
  }; 
 


import moxios from "moxios";
// import store from "../store/store";
import * as actions from '../actions/actions';
import { shallow,configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ACTION_TYPES from "../actions/actionTypes";

configure({ adapter: new Adapter() });

describe('Actions',()=>{
    beforeEach(()=>moxios.install());
    afterEach(()=>moxios.uninstall());
    
    it('FETCH_POSTS action',()=>{
        let region="africa";
        const url=`https://restcountries.com/v3.1/region/${region}`;
        let mock=[
            {
                name:{common:"usa"}
            },
            {
                name:{common:"china"}
            },
            {
                name:{common:"china"}
            },
            {
                name:{common:"england"}
            },
        ];
    

        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            if(request.url===url)
            request.respondWith({status:200, response:mock});
            else
            request.respondWith({status:500,response:"Bad Gateway"})
        });
       
    });

        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            request.respondWith({status:422, response:{message:'problem'}, 
        });
        });
        it("regions update",()=>{
            let region="africa";
            store.dispatch(actions.getCountries(region))
            .then(()=>{
            let {error,result}=store.getState().result;
            mock = mock.map(item=>item.name.common)
            let bool=result == mock;
            expect(error).toBeUndefined;
            expect(bool).toBeTrue;
            })
        });
        it('regions update fail',()=>{
            let region="";
             store.dispatch(actions.getCountries(region))
            .then(()=>{
                let{error,result}=store.getState().result;
                let bool=result ===mock;
                expect(error.length).toBeGreaterThan(0);
                expect(bool).toBeFalse;
            })
        })
        it('dispatches getCountries after a successfull API requets', () => {
            mock.onGet().reply(200, mock)
            store.dispatch(actions.getCountries("Africa")).then(() => {
                let expectedActions = [
                    {
                        type: 'ACTION_TYPES.FETCH_SUCCESS',
                        payload:data
                    }
                ]
               
                expect(store.actions.getCountries()).toEqual(expectedActions)
            });
        })
        it('dispatches FETCH_FAIL after a FAILED API requets', () => {
                    mock.onGet().reply(400);
                    store.dispatch(actions.getCountries()).then(() => {
                        let expectedActions = [
                           
                            {
                                type: 'ACTION_TYPES.FETCH_FAIL',
                                payload: { error: { message: 'error message' } }
                            }
                        ]
                        expect(store.actions.getCountries()).toEqual(expectedActions)
                    });
                })
       
    it("FETCH_POSTS DETAILS",()=>{
        let mock=[{name:"japan",capital:"tokyo"}];
        let region='japan';
        const url=`https://restcountries.com/v3.1/region/${region}?fullText=true`;
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            if(request.url===url)
            request.respondWith({status:200,response:mock});
            else
            request.respondWith({status:500,response:"Bad Gateway"})
        });
    })
   
});
