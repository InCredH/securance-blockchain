import React from "react";
import "../css/Dashboard.css";

function TabCont(props){
    return(
        <tbody>
            <tr>
                <td>{props.claimamt}</td>
                <td>{props.date}</td>
                <td>{props.verdict}</td>
            </tr>
        </tbody>
    );
}

export default TabCont;