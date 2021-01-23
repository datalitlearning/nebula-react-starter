import React from 'react'
import { HeaderRow, HeaderCell } from './TableTheme'

const TableHeader = ({ hc }) => {

  // headers
  const columns = [...hc.qDimensionInfo, ...hc.qMeasureInfo].map((f) => f.qFallbackTitle);

  const renderTableHeader = () => {
    return (
      <HeaderRow>
        {columns.map((c) => <HeaderCell>{c}</HeaderCell>)}
      </HeaderRow>
    )
  }

  return (
    <thead>
        {renderTableHeader()}  
    </thead>
  )

}

export default TableHeader