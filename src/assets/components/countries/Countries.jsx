import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";


const Countries = () => {
    const [countries,setCountries]=useState([])
    const [visitedCountries,setVisitedCountries]=useState([])
    const[visitedFlags,setVisitedFlags]=useState([])
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
const handleVisitedCountry=country=>{
      
           const newvisitedCountries=[...visitedCountries,country]
           setVisitedCountries(newvisitedCountries)
}
const handleVisitedFlags=flag=>{
    const newVisitedFlags=[...visitedFlags,flag];
    setVisitedFlags(newVisitedFlags)
}
    return (
        <div>
         <h3>Countries:{countries.length}</h3> 
         <h3 className="visited"> Visited countries:{visitedCountries.length}</h3>
         <ul>
         {
            visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
         }
         </ul>
         <div>
            {
                visitedFlags.map((flag,idx)=><img key={idx} src={flag}></img>)
            }
         </div>
         <div className="country-container">
         {
            countries.map((c)=><Country
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            key={c.cca3} country={c}></Country>
            )
         } </div> 
         
        </div>
    );
};

export default Countries;