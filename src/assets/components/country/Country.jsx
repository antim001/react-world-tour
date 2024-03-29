import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3}=country;
    const [visited,setVisited]=useState(false)
  const handleButton=()=>{
       setVisited(!visited)
  }
    return (
        <div className={`box ${visited?'Visited':'non-visited'}`}>
           <h3>name:{name.common}</h3> 
           <img src={flags.png} alt="" />
           <h3>Population:{population}</h3>
           <h3>Area:{area}</h3>
           <h3><small>Code:{cca3}</small></h3>
           <br />
           <button onClick={()=>handleVisitedFlags(country)}>Add Flags</button>
           <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
           <br />
           <button onClick={handleButton}>{visited?'Ghurchi':'Ghurte jabo'}</button>
           {
             visited? 'Desh ghurchi ami':'Taka jommachi,tarpor jabo'
           }
        </div>
    );
};

export default Country;