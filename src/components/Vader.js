import React from "react";

const Vader = props => (
    <div className="weather__info">
            { 
                props.city && props.country && <p className="weather__key">Plats: 
                <span className="weather__value"> { props.city }, { props.country }</span>
                </p>
            }
            { 
                props.temperature && <p className="weather__key">Temperatur: 
                <span className="weather__value"> { props.temperature }</span>°C
                </p>
            }
            { 
                props.description && <p className="weather__key">Beskrivning: 
                <span className="weather__value"> { props.description }</span>
                </p>
            }
            { 
                props.humidity && <p className="weather__key">Luftfuktighet: 
                <span className="weather__value"> { props.humidity }</span>%
                </p>
            }
            { 
                props.error && <p className="weather__error">{ props.error }</p>
            }
        </div>
);

export default Vader;