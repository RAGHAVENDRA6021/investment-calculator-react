import React from "react";
import {formatter} from '../util/investment'

const InvestmentTable = ({userTable}) => {
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interst(Year)</th>
            <th>Invested Capital</th>
          </tr> 
        </thead>
        <tbody>
           {
            userTable.map((row,index)=>{
                return(
                    <tr key={index}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.annualInvestment)}</td>
                    </tr>
                )
            })
           }
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
