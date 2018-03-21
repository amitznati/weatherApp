import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    onInputChange = (e) =>{
        this.setState({term: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault();
        //http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=5fd0dd891894d3883e5bd66847b2f244
        //http://samples.openweathermap.org/data/2.5/forecast?appid=5fd0dd891894d3883e5bd66847b2f244&q=new%20york,us

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit={this.onSubmit} className="input-group" >
                <input
                    placeholder="Get a five-day forcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className={"btn btn-secondary"}>Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);