import React from "react";
import "../css/Dashboard.css";
import TabCont from "./TabCont";
import { useEffect , useState} from "react";

function Table({contractState}){
    const history1 = [
        { claimamt: 300, date: "2023-04-21", verdict: "Accepted" },
        { claimamt: 200, date: "2023-04-22", verdict: "Rejected" },
        { claimamt: 100, date: "2023-04-23", verdict: "Rejected" },
      ];
      const [data, setData] = useState({});
      const [history, setHistory] = useState([]);
      async function getClaims (){
            // event.preventDefault();
            // const {contract} = contractState;
            const { contract } = contractState;
            try {
                const claims = await contract.getClaimsOfUser(data.metamask_id);
                setHistory(claims);
                console.log(claims);
              } 
              catch (err) {
                console.error(err);
                console.log("Nothing is happening !")
              }
        }
        useEffect(()=>{
            console.log(history)
        },[history]);
        useEffect(() => {
            const formDataString = localStorage.getItem('formData');
            if (formDataString) {
                const data = JSON.parse(formDataString);
                console.log(data);
                setData(data);
                getClaims();
            }
        }, []);
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
                {history1.map((item, index) => (
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