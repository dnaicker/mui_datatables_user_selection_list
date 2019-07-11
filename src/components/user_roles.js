import React from 'react';
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class UserRoles extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    change: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { value, index, change } = this.props;
    const cities = [
      "Post",
      "Post, Edit",
      "Post, Edit, Add, Remove Users"
    ];

    return (
      <FormControl>
        <Select
          value={value}
          onChange={event => change(event.target.value, index)}
          style={{ fontSize: "inherit" }}
        >
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default UserRoles;