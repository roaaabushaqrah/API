import React from 'react'


 const Weather=(props) =>  {
   

   
        return (
            <div>
        
             
             
             {
                 props.city && <div> City: {props.city} </div> 
                 
             } 
             
             
             
            {  props. tempreature &&<div> tempreature:   {props.tempreature}</div>}
       
          {   props.tempreature && <div>  Country: {props.country} </div>  }
         { props.description &&<div>   description:  {props.description}</div>}
         { props.humidity && <div>  humidity:  {props.humidity}</div>}
         {props.error && <div> Error :{props.error} </div>}
            </div>
        )
    
}
export default  Weather;