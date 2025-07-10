import React from 'react'
import { Form } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import FormInput from '../molecules/formInput'
import ButtonAtom from '../atoms/button'
import { FormContainerProps, FormData } from '../../interface/types'

function FormContainer({ updateFormData }: Readonly<FormContainerProps>) {
  const [form] = Form.useForm<FormData>()

  const handleSubmit = (values: FormData) => {
    const newFormData: FormData = {
      ...values,
      id: uuidv4()
    }
    updateFormData(newFormData)
    form.resetFields()
  }

  return (
    <div className="formContainer">
      <Form form={form} onFinish={handleSubmit} className="formContent">
        <FormInput />
        <Form.Item>
          <ButtonAtom type="primary" htmlType="submit">
            Submit
          </ButtonAtom>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormContainer
