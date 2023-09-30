import {Component} from 'react'
import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  FormAndMemosContainer,
  MemoForm,
  Label,
  Input,
  Select,
  Option,
  Button,
  BgContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    backgroundImageUrl: '',
    topTextInput: '',
    topText: '',
    bottomTextInput: '',
    bottomText: '',
    ActiveFontSizesOptionId: fontSizesOptionsList[0].optionId,
    ActiveFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({ActiveFontSizesOptionId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      ActiveFontSizesOptionId,
      topTextInput,
      bottomTextInput,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      ActiveFontSizeId: ActiveFontSizesOptionId,
      topText: topTextInput,
      bottomText: bottomTextInput,
    })
  }

  renderMemoForm = () => {
    const {
      backgroundImageUrlInput,
      ActiveFontSizesOptionId,
      topTextInput,
      bottomTextInput,
    } = this.state
    return (
      <MemoForm onSubmit={this.onSubmitForm}>
        <Label htmlFor="backgroundImage">Image URL</Label>
        <Input
          placeholder="Enter The Image URL"
          id="backgroundImage"
          type="text"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
        />
        <Label htmlFor="topTextId">Top Text</Label>
        <Input
          placeholder="Enter The Top Text"
          id="topTextId"
          type="text"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
        />
        <Label htmlFor="bottomTextId">Bottom Text</Label>
        <Input
          placeholder="Enter The Bottom Text"
          id="bottomTextId"
          type="text"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
        />
        <Label htmlFor="select">Font Size</Label>
        <Select
          id="select"
          value={ActiveFontSizesOptionId}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(eachOption => (
            <Option key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </Option>
          ))}
        </Select>
        <Button type="submit">Generate</Button>
      </MemoForm>
    )
  }

  renderMemo = () => {
    const {
      backgroundImageUrl,
      ActiveFontSizeId,
      topText,
      bottomText,
    } = this.state
    return (
      <BgContainer data-testid="meme" bgImage={backgroundImageUrl}>
        <TextContent fontSize={ActiveFontSizeId}>{topText}</TextContent>
        <TextContent fontSize={ActiveFontSizeId}>{bottomText}</TextContent>
      </BgContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemosContainer>
            {this.renderMemo()}
            {this.renderMemoForm()}
          </FormAndMemosContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
