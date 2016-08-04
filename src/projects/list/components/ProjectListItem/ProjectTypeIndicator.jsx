import React, { PropTypes } from 'react'
import classNames from 'classnames'

require('./ProjectTypeIndicator.scss')

const ProjectTypeIndicator = ({ type }) => {
  const classes = classNames('ProjectTypeIndicator', {
    'dn' : type === 'dn',
    'wr' : type === 'wr',
    'pr' : type === 'pr'
  })
  let typeAbbr = '';
  if (type === 'dn') {
    typeAbbr = 'Dn'
  } else if (type === 'wr') {
    typeAbbr = 'Wr'
  } else if (type === 'pr') {
    typeAbbr = 'Pr'
  }
  return (
    <div className={ classes }>
      { typeAbbr }
    </div>
  )
}

ProjectTypeIndicator.propTypes = {
  type: PropTypes.string.isRequired
}

export default ProjectTypeIndicator
