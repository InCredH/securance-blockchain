import React from "react";
import "../css/secadmin.css";

function AdmTran(props){
    return (
        <>
            <div className='adm-blk'>
                <div className="adm-blk-top"> 
                    <h3>Complaint ID : {props.ide}</h3>
                </div>
                <div className="adm-blk-btm"> 

                </div>
            </div>
        </>
    );
}

export default AdmTran;