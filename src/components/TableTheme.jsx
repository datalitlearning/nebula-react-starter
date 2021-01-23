import styled from '@emotion/styled'

const TableWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: auto;
`

const StyledTable = styled.table`
  border-collapse: seperate;
  border-spacing: 0;
  &:hover {
    cursor: pointer
  }
`

const HeaderRow = styled.tr`
`

const HeaderCell = styled.th`
  padding: 6px;
  border: 1px solid #E7E7E7
  background-color: ${(props) => props.backgroundColor}
`

const BodyCell = styled.td`
padding: 6px;
border: 1px solid #D3D3D3
`

const BodyRow = styled.tr`
`

export {
  TableWrapper,
  StyledTable,
  HeaderRow,
  HeaderCell,
  BodyCell,
  BodyRow,
}