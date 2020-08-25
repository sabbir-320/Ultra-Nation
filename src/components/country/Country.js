import React from 'react';

const Country = (props) => {
    const { name, population, region, flag, callingCodes } = props.country
    const countryHandler = props.countryHandler;
    return (
        <div style={{ border: '1px solid lightgray'}}>
            <h1>{name} </h1>
            <p>Population: {population} </p>
            <p><small> Region: {region} </small></p>
            <p>Calling Codes: {callingCodes} </p>
            <img style={{ height: "50px" }} src={flag} alt="" />
            <br />
            <button onClick={() => countryHandler(props.country)}> Add Country</button>
        </div>
    );
};

export default Country;