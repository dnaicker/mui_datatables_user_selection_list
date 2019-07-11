import React from 'react';
import ReactDOM from 'react-dom';
import MUIDataTable from 'mui-datatables';
import { table_data, column_headers, column_options } from '../data/table_config'

//========
class UsersSelectionList extends React.Component {

  //--------
  constructor(props) {
    super(props);
  }

  //--------
  render(props) {
    return (
      <MUIDataTable 
        title={'Users'}
        columns={column_headers()}
        data={table_data()}
        options={column_options()}>
      </MUIDataTable>
    );
  }
}

//========
export default UsersSelectionList;