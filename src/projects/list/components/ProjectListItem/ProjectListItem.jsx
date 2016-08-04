import _ from 'lodash'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classNames from 'classnames'
import ProjectTypeIndicator from './ProjectTypeIndicator'

require('./ProjectListItem.scss')

const ProjectListItem = ({ project, headerOnly = false, shouldAnimate = false }) => {
  const projectStyles = classNames(
    'ProjectListItem',
    { header : headerOnly }
  )

  let projectDOM = (
    <div className={ projectStyles }>
      <div className="projectName">Name</div>
      <div className="projectCurrentPhase">Phase</div>
      <div className="projectStartsOn">Starts On</div>
      <div className="projectEndsOn">Ends On</div>
    </div>
  )
  const currentPhase = _.get(project, 'currentPhases[0].phaseType')
  if (!headerOnly) {
    projectDOM = (
      <div className={ projectStyles }>
        <ProjectTypeIndicator type="dn" />
        <Link className="projectName" to={`/projects/${project.id}`}>{ project.name }</Link>
        <div className="projectCurrentPhase">{ currentPhase }</div>
        <div className="projectStartsOn">{ project.registrationStartDate }</div>
        <div className="projectEndsOn">{ project.registrationEndDate }</div>
      </div>
    )
  }

  if (shouldAnimate) {
    return (
      <ReactCSSTransitionGroup
        transitionName="project"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {projectDOM}
      </ReactCSSTransitionGroup>
    )
  }

  return projectDOM
}

ProjectListItem.propTypes = {
  shouldAnimate : PropTypes.bool
}

export default ProjectListItem
