import css from './Statistics.module.css'
import PropTypes from 'prop-types'

const FeedbackOptions = ({options, onClick}) => {
  return (
    <div>
      {options.map(item => (
        <button
          key={item}
          className={css.button}
          type="button"
          onClick = {() => onClick(item)}
        >
        {item}
        </button>
      ))}
    </div>
  )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};