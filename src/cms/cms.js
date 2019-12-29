import CMS from 'netlify-cms'

import AboutPreview from './preview-templates/AboutPreview'
import NewsPreview from './preview-templates/NewsPreview'
import ArtistsPreview from './preview-templates/ArtistsPreview'

CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('news', NewsPreview)
CMS.registerPreviewTemplate('artist', ArtistsPreview)
