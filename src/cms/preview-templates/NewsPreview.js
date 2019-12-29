import React from 'react'
import PropTypes from 'prop-types'
import { NewsTemplate } from '../../templates/news'

const NewsPreview = ({ entry, widgetFor }) => (
  <NewsTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

NewsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NewsPreview
