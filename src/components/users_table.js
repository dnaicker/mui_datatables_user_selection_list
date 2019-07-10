import React from 'react';
import ReactDOM from 'react-dom';
import MUIDataTable from 'mui-datatables';
import data from '../data/mui-datatables-data'

//========
class UsersTable2 extends React.Component {
  //--------
  constructor(props) {
    super(props);
  }

  //--------
  //set column headers
  getColumnsHeaders = () => {
    return ['Username', 'Title', 'Avatar', 'Roles'];
  }

  //--------
  //set column options
  getColumnOptions = () => {
    return {
      filterType: 'dropdown',
      responsive: 'scroll'
    }
  }

  //--------
  //get data into mui-datatable
  getDataForTable = () => {
    return data();
  }

  //--------
  //initialise mui-datatable
  render(props) {
    const columns = this.getColumnsHeaders();
    const data = this.getDataForTable();
    const options = this.getColumnOptions();

    console.log(data);

    return (
      <MUIDataTable 
        title={'Users'}
        columns={columns}
        data={data}
        options={options}>
      </MUIDataTable>
    );
  }
}

//========
export default UsersTable2;