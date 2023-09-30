// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding: 32px 24px 32px 24px;
  @media (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`
export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 26px;
  text-align: center;
  color: #35469c;
  @media (min-width: 768px) {
    text-align: left;
  }
`
export const FormAndMemosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const MemoForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 42%;
  }
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: #7e858e;
  padding-bottom: 6px;
`
export const Input = styled.input`
  border: 1px solid #d7dfe9;
  color: #5a7184;
  font-family: 'Roboto';
  font-size: 14px;
  height: 36px;
  border-radius: 4px;
  margin-bottom: 14px;
  padding-left: 12px;
  outline: none;
`
export const Select = styled.select`
  border: 1px solid #d7dfe9;
  height: 36px;
  border-radius: 4px;
  margin-bottom: 14px;
  padding-left: 12px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  outline: none;
`
export const Option = styled.option`
  color: #1e293b;
  font-family: 'Open Sans';
  font-size: 14px;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  display: flex;
  align-self: flex-start;
  padding: 12px 60px 12px 60px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Open Sans';
  border: none;
  cursor: pointer;
  border-radius: 6px;
  @media (min-width: 768px) {
    padding: 10px 30px 10px 30px;
  }
`
export const BgContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center
  height: 400px;
  margin-bottom: 50px;
  padding: 16px;
  @media (min-width: 768px) {
    width: 48%;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: ${props => props.fontSize}px;
`
