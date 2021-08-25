import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Input,
  Grid,
  Cell,
  Label
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import {useState} from 'react'

const ArticleReferenced = ({className}) => {
  const [refValue, setRefValue] = useState()
  const [code, setCode] = useState('725412')

  const onChangeHandler = (event, {value}) => {
    setCode(value)
  }
  return (
    <Article className={className}>
      <H2>Forward Referenced</H2>
      <Paragraph>
        PinInput value is readed from a hidden input to get the full result of
        the value and to be able to access it without having to transform data.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell span={2}>
          <PinInput
            status="undefined"
            onChange={onChangeHandler}
            defaultValue={code}
            ref={node => {
              node && setRefValue(node.value)
            }}
          />
        </Cell>
        <Cell style={{display: 'flex', flexDirection: 'column'}}>
          <Label>onChange value</Label>
          <Input style={{textAlign: 'center'}} value={code} disabled readonly />
        </Cell>
        <Cell style={{display: 'flex', flexDirection: 'column'}}>
          <Label>byRef value</Label>
          <Input value={refValue} disabled readonly />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleReferenced.propTypes = {
  className: PropTypes.string
}

export default ArticleReferenced
