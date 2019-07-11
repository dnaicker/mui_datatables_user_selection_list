import React from 'react';
import UserRoles from '../components/user_roles';

//----------
//Get column configuration options
export function column_options() {
  return {
    filterType: 'dropdown',
    responsive: 'scroll',
    customToolbar: null,
    print: false,
    download: false,
    viewColumns: false,
    responsive: 'stacked',
  }
}

//----------
//Get column headers
export function columns() {
  return [{
      name: 'User',
      label: '',
      options: {
        sort: false,
        filter: false,
      }
    },
    {
      name: 'Role',
      label: '',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <UserRoles 
              value={value}
              index={tableMeta.columnIndex}
              change={event => updateValue(event)}
            />
          )
        }
      }
    }
  ];
}

//----------
//Get data for table
export function table_data() {
  return [
    ["User 1", "Post"],
    ["User 2", "Post"]
  ];
}