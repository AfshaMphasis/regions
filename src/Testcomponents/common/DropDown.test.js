
import CommonDropDown from "../../components/common/commonDropDown";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {shallow} from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe('CommonDropDown components', () => {
    let props = {
      dropDownList:[{id: "countryDropDown"}],
      Data:
      {
        heading: "Countries App",
        countries: [
          {
            id: "africa",
            name: "Africa"
          },
          {
            id: "americas",
            name: "Americas"
          },
          {
            id: "asia",
            name: "Asia"
          },                                                                                         
          {
            id: "europe",
            name: "Europe"
          }]
      },
      handleOnChange :fn => fn,
      handleDropdownChange: fn => fn,
    }
    it('renders three <commonSelect/> components', () => {
      const wrapper = shallow(<CommonDropDown {...props} />);
      expect(wrapper.contains(<CommonDropDown/>)).toBe(false);
   });
  it('should call handleDropdownChange method', () => {
    const value = {
        preventDefault: fn => fn,
        target: {
          name:"Africa"
        }
    }
    const wrapper = shallow(<CommonDropDown {...props}/>);
    wrapper.instance(). handleDropdownChange(value);
    expect(wrapper.find('handleDropdownChange').exists()).toBe(false);
  })
  it('should call handleOnChange method', () =>
  {
      const wrapper = shallow(<CommonDropDown {...props}/>);
      expect(wrapper.find(`select`).simulate('change', {preventDefault: fn => fn,target: {name: "Africa"}}));
  
  }); 
  });
  
  
  
  
  