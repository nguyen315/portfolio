import {parse, format} from 'date-fns'
import PropTypes from 'prop-types'

export default function DateComponent({dateString}) {
  const date = parse(dateString, 'dd/MM/yyyy', new Date())
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

DateComponent.propsTypes = {
  dateString: PropTypes.string.isRequired
}

DateComponent.defaultProps = {
  dateString: ''
}