import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import {atomPanelElevation} from '../../src'
import AtomPanel from '@s-ui/react-atom-panel'

const ArticleElevated = ({className}) => {
  return (
    <Article className={className}>
      <H2>Elevated</H2>
      <Paragraph>
        {' '}
        These are the options for the prop <Code>elevation</Code>{' '}
      </Paragraph>
      <div
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {Object.keys(atomPanelElevation).map((elevation, idx) => (
          <div
            key={idx}
            style={{flex: '0 0 auto', textAlign: 'center', margin: '15px'}}
          >
            <AtomPanel elevation={atomPanelElevation[elevation]} floating>
              <div style={{height: '100px', width: '100px'}} />
            </AtomPanel>
            <span style={{color: 'grey'}}>{atomPanelElevation[elevation]}</span>
          </div>
        ))}
      </div>
    </Article>
  )
}

ArticleElevated.propTypes = {
  className: PropTypes.string
}

export default ArticleElevated
