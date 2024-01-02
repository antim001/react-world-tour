import './country.css'
const Country = ({country}) => {
    const {name,flags,population,area}=country;
    return (
        <div className="box">
           <h3>name:{name.common}</h3> 
           <img src={flags.png} alt="" />
           <h3>Population:{population}</h3>
           <h3>Area:{area}</h3>
        </div>
    );
};

export default Country;