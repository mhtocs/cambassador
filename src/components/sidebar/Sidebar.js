import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/dataActions";
import "./Sidebar.css";

class Sidebar extends React.Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    const categories = this.props.categories.map(c => (
      <div key={c.id} className="ctrl">
        <label htmlFor="check1">{c.name}</label>
        <input type="checkbox" className="check" />
      </div>
    ));
    if (categories.length > 0)
      return (
        <div className="sidebar">
          <div className="options-card card">
            <h5 className="card__title">PROGRAM TYPE</h5>
            {categories}
          </div>
        </div>
      );
    return <div className="sidebar" />;
  }
}

Sidebar.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  categories: state.data.categories
});

export default connect(
  mapStateToProps,
  { fetchCategories }
)(Sidebar);
