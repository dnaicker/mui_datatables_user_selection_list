//----------
//Get column configuration options
export function column_options() {
  return {
    filterType: 'dropdown',
    responsive: 'scroll'
  }
}

//----------
//Get column headers
export function column_headers() {
  return ['Username', 'Title', 'Avatar', 'Roles'];
}

//----------
//Get data for table
export function table_data() {
  return [
    ["User 1", "Job Title 1", "Avatar 1", ""],
    ["User 2", "Job Title 2", "Avatar 2", ""]
  ];
}