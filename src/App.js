import React, { Component } from 'react';
import Weather  from './components/Weather';
import Form from './components/Form'

const API_KEY="d63e4e8992ced3f5a03152d4a71f4b5a0";
//
class App extends Component {


  state ={
    tempreature :'',
       city :'',
  country :'',
    description :'',
    humidity:'',
    error:''
  }


  getweather= async(e)=>{
e.preventDefault()
const city =e.target.elements.city.value;
const country = e.target.elements.country.value;
console.log(city,country)
const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=e36ed364400282e43250b6c4c0274d44`)

const data =await api.json();
    console.log('weather')
    console.log(data);


if(city && country){

    this.setState({
      tempreature :data.main.temp,
      city :data.name,
 country :data.sys.country,
   description :data.weather[0].description,
   humidity:data.main.humidity,
   error:''

})
} else{
  this.setState({
    tempreature :'',
    city :'',
country :'',
 description :'',
 humidity:'',
   
 error:'please Enter Data'

})
}
  }
 
  render() {
    return (
      <div>
      
       
      <Form getweather={this.getweather}/>
        <Weather   tempreature ={this.state.tempreature}
       city ={this.state.city}
  country ={this.state.country}    description ={this.state.description}
    humidity={this.state.humidity} error={this.error}/>

       
   
      </div>
    );
  }
}

export default App;
