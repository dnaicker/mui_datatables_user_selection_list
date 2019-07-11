import React from 'react';
import ReactDOM from 'react-dom';
import MUIDataTable from 'mui-datatables';
import { table_data, columns, column_options } from '../data/table_config'

//========
class UsersSelectionList extends React.Component {

  //--------
  constructor(props) {
    super(props);
  }

  //add dropdown
  //save selection

  //--------
  render(props) {
    return (
      <MUIDataTable 
        title={'Users select'}
        columns={columns()}
        data={table_data()}
        options={column_options()}
        >
      </MUIDataTable>
    );
  }
}

//========
export default UsersSelectionList;