import React,{Component} from "react";
import { getCountries } from "../actions/actions";
import { connect } from "react-redux";
import CommonDropDown from "./common/commonDropDown";


export class RegionCountryList extends Component { 
 
    componentDidMount() { 
        this.setCountries(this.props.Content.countries[0].name); 
    } 
    setCountries(name) { 
        this.props.getCountries(name); 
    } 
    
    render() { 
        return ( 
            <div> 
                <CommonDropDown dropDownList={this.props.Content.countries} 
                handleOnChange={(name)=>this.setCountries(name)} /> 

                <CommonDropDown dropDownList={this.props.result} /> 
            </div> 
        ) 
    } 
} 

const mapStateToProps = (state) => { 

    return { 
        result: state.event.result, 
        error: state.event.error, 
    }; 
}; 
const mapDispatchProps = (dispatch) => ({ 
    getCountries: (name) => dispatch(getCountries(name)) 
}); 
export default connect(mapStateToProps, mapDispatchProps)(RegionCountryList); 