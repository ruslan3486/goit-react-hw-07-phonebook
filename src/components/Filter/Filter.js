import { useSelector, useDispatch } from "react-redux";
import React from "react";
// import PropTypes from "prop-types";
import s from "./filter.module.css";
// import types from '../../redux/phonebook/phonebook-actions'
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={s.container_filter}>
      <p className={s.filter_info} value={filter}>
        Find contacts by name
      </p>
      <input
        className={s.filter_text}
        type="text"
        value={filter}
        id="filter"
        onChange={onChangeFilter}
      />
    </div>
  );
}

// const mapStateToProps = state => ({

//     value: state.contacts.filter
// })

// const mapDispachToProps = dispatch => ({

//     onchangeFilter: event => dispatch(filter(event.currentTarget.value))
// })

// export default connect(mapStateToProps, mapDispachToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onchangeFilter: PropTypes.func.isRequired,
// };
