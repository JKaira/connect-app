import React, { PropTypes } from 'react'
import ProjectListItem from '../ProjectListItem/ProjectListItem'
import { RichDataTableHeader } from 'appirio-tech-react-components'

require('./ProjectList.scss')

const columns = [
  { displayName : 'Type', key: 'type' },
  { displayName : 'Projects', key: 'name' },
  { displayName : 'Status', key: 'status', sorted: 'asc' },
  { displayName : 'Status Date', key: 'statusDate' },
  { displayName : 'Customer', key: 'customer' },
  { displayName : 'Copilot', key: 'copilot' }
]
const sortColumns = {
  name: [
    {
      key: 'timestamp',
      value: 'Latest first',
      order: 'desc'
    },
    {
      key: 'timestamp',
      value: 'Oldest first',
      order: 'asc'
    },
    {
      key: 'name',
      value: 'Name A-Z',
      order: 'asc'
    },
    {
      key: 'name',
      value: 'Name Z-A',
      order: 'desc'
    }
  ]
}
const ProjectList = (({ projects, onSort }) => {

  const renderProject = (project, idx) => {
    return (<ProjectListItem project={ project } key={ idx } />)
  }
  const sort = (column, option) => {
    console.log('sorting on ' + option.key)
    // TODO change state of column in the component state
    column.sorted = option.order
    onSort(option)
  }

  return (
    <div className="project-list">
      <RichDataTableHeader columns={ columns } sortColumns={ sortColumns } onSort={ sort }/>
      { projects.map(renderProject) }
    </div>
  )
})

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProjectList
