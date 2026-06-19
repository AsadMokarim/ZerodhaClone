import React from "react";

import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((prod, index) => {
            const currValue = prod.price * prod.qty;
            const isProfit = currValue - prod.avg * prod.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = prod.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{prod.product}</td>
                <td>{prod.name}</td>
                <td>{prod.qty}</td>
                <td>{prod.avg.toFixed(2)}</td>
                <td>{prod.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(currValue - prod.avg * prod.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{prod.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
