import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

class SearchInput extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={{flexGrow: 1}}>
          <TextField
            id="search"
            label="Search"
            type="search"
            style={this.props.styles.textField}
            margin="normal"
          />
        </div>
        <Button color="inherit">
          <SearchIcon style={this.props.styles.icons}/>
        </Button>
      </Fragment>
    );
  }
}

export default SearchInput;
