import React from 'react'

const Result = (props) => {
    const {error, city, temp, date,sunRise, sunSet, wind, pressure } = props.weather;

    let content = null;
    const sunRiseTime = new Date(sunRise * 1000).toLocaleTimeString();
    const sunSetTime = new Date(sunSet * 1000).toLocaleTimeString();
    if(!error && city) {
        content = (
            <div>
                <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date} </h4>
                <h4>Aktualna temperatura: {temp} °C </h4>
                <h4>Wschód słońca o {sunRiseTime} </h4>
                <h4>Zachód słońca o {sunSetTime} </h4>
                <h4>Prędkość wiatru to: {wind} m/s </h4>
                <h4>Aktualne ciśnienie: {pressure} hPa</h4>
            </div>
        )
    }
    return(
        <div className='result'>
            {error ? `Nie mamy w bazie "${city}"` : content}
        </div>
    );
}
export default Result;