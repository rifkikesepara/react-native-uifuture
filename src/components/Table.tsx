import { DataTable } from 'react-native-paper';
import type { TableProps } from './Types';
import { useState } from 'react';

const Table = ({ columns, rows }: TableProps) => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = useState(4);

  const numberOfItemsPerPageList = [2, 3, 4];
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, rows?.length);

  return (
    <DataTable>
      <DataTable.Header>
        {columns.map(({ header }, index) => (
          <DataTable.Title key={index}>{header}</DataTable.Title>
        ))}
      </DataTable.Header>
      {rows.slice(from, to).map((item) => (
        <DataTable.Row>
          {columns.map((column, colIndex) => (
            <DataTable.Cell key={colIndex}>
              {!column.Cell ? item[column.header] : column.Cell}
            </DataTable.Cell>
          ))}
        </DataTable.Row>
      ))}
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(rows.length / numberOfItemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${rows.length}`}
        showFastPaginationControls
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={numberOfItemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
  );
};

export default Table;
