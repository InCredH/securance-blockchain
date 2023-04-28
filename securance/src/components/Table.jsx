import React from "react";
import "../css/Dashboard.css";
import TabCont from "./TabCont";
function Table(){
    const history = [
        { claimamt: 300, date: "2023-04-21", verdict: "Accepted" },
        { claimamt: 200, date: "2023-04-22", verdict: "Rejected" },
        { claimamt: 100, date: "2023-04-23", verdict: "Rejected" },
      ];
    return(
        <div className="claim">
            <table>
                <thead>
                    <tr>
                    <th>Claim Amount</th>
                    <th>Date</th>
                    <th>Verdict</th>
                    </tr>
                </thead>
                {history.map((item, index) => (
                    <TabCont
                    key={index}
                    claimamt={item.claimamt}
                    date={item.date}
                    verdict={item.verdict}
                    />
                ))}
            </table>
        </div>
    );
}

export default Table;