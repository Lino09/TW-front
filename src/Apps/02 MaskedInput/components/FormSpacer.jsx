import PropTypes from 'prop-types';

export default function FormSpacer ({ cols, rows }) {return <span className={`col-span-${cols} row-span-${rows} w-full h-0.5 bg-gradient-to-r from-indigo-600 to-emerald-600`}></span>}

FormSpacer.propTypes = {
    rows: PropTypes.string,
    cols: PropTypes.string,
  }
  FormSpacer.defaultProps = {
    rows: '1',
    cols: '2',
  }
  