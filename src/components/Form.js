import React from "react";

const Form = props => (
    <form onSubmit={props.getVader}>
        <input type="text" name="stad" placeholder="Land:"></input>
        <input type="text" name="land" placeholder="Stad:"></input>
        <button>Få väder!</button>
    </form>
);

export default Form;