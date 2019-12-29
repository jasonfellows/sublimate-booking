import React from 'react'
import PropTypes from 'prop-types'
import { AboutTemplate } from '../../templates/about'

const AboutPreview = ({ entry, widgetFor }) => (
  <AboutTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPreview
