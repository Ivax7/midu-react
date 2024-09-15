import { Form } from "react-bootstrap"
import { SectionType } from "../types"

interface Props {
  type: SectionType
  placeholder: string
  loading?: boolean
  onChange: (value: string) => void
  value: string}
  
export const TextArea = ({ type, autofocus, placeholder, loading, value, onChange }: Props) => {
  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea'
      placeholder={placeholder}
      style={{height: '150px'}}
    />
  )
}