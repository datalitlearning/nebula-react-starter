import React from 'react';
import { useLayout, useSelections, useState, useEffect } from '@nebula.js/stardust';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { TableWrapper, StyledTable } from './TableTheme'


function Table({ prop }) {

  const layout = useLayout()
  const selections = useSelections();
  const [selectedRows, setSelectedRows] = useState([]);
  const hc = layout.qHyperCube;

  const selCallback = (c, id) => {
    selections.begin('/qHyperCubeDef')
    setSelectedRows((prev) => {
      if (prev.includes(id)) {
        return prev.filter((v) => v !== id);
      }
      return [...prev, id];
    })
  }

  useEffect(() => {
    if (selections.isActive()) {
      if (selectedRows.length) {
        selections.select({
          method: 'selectHyperCubeCells',
          params: ['/qHyperCubeDef', selectedRows, []],
        });
      } else {
        selections.select({
          method: 'resetMadeSelections',
          params: [],
        });
      }
    } else if (selectedRows.length) {
      setSelectedRows([]);
    }
  }, [selections.isActive(), selectedRows]);

  return (
    <TableWrapper>
      <StyledTable>
        <TableHeader hc={hc} prop={prop} />
        <TableBody
          prop={prop}
          hc={hc}
          selCallback={selCallback}
        />
      </StyledTable>
    </TableWrapper>
  )
}

export default Table