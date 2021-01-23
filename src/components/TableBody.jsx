import React from 'react';
import { BodyCell, BodyRow } from './TableTheme'

const TableBody = ({ hc, selCallback }) => {
  // rows
  const rows = hc.qDataPages[0].qMatrix;

  const handleClick = (c, id) => {
    selCallback(c, id);
  };

  const renderTableBody = () => (
    rows.map((row, rowID) => (
      <BodyRow>
        {row.map(cell => (
          <BodyCell onClick={() => handleClick(cell, rowID)}>
            {cell.qText}
          </BodyCell>
        ))}
      </BodyRow>
    ))
  );

  return (
    <tbody>
      {renderTableBody()}
    </tbody>
  );
};

export default TableBody;
