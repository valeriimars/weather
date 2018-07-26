import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

class SearchInput extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchTerm: ''
  };

  updatesearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.searchTerm)
  };

  render() {
    return (
      <Fragment>
        <div style={{flexGrow: 1}}>
          <TextField
            id="search"
            label="Search"
            type="search"
            style={this.props.styles.textField}
            onChange={this.updatesearchTerm}
            margin="normal"
            value={this.state.searchTerm}
          />
        </div>
        <Button color="inherit" onClick={this.onSubmit}>
          <SearchIcon style={this.props.styles.icons}/>
        </Button>
      </Fragment>
    );
  }
}

export default SearchInput;
