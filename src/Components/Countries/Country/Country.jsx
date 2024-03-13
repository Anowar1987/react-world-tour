import './Country.css'
const Country = ({country}) => {
    
    const {name, flags, population, area, capital} = country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Land Area: {area}</p>
        </div>
    );
};

export default Country;