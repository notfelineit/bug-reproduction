import { RadioGroup, Radio, Button } from '@headlessui/react'
import { useState } from 'react'

function App() {
  const [myValue, setMyValue] = useState(false)
  const [formKey, setFormKey] = useState(null)
  const [formValue, setFormValue] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    for (const pair of formData.entries()) {
      setFormKey(pair[0])
      setFormValue(pair[1])
    }
  }

  return (
    <div>
      <form
        id='bug-repro-form'
        onSubmit={handleSubmit}
        className='space-y-2 @container'
      >
        <RadioGroup
          value={myValue}
          onChange={setMyValue}
          className='relative flex cursor-default rounded'
          name='booleanFormInput'
        >
          <Radio value={false} className="m-2 p-2 cursor-pointer bg-blue-100">
            <span className='text-sm font-semibold'>False</span>
          </Radio>
          <Radio value={true} className="m-2 p-2 cursor-pointer bg-blue-100">
            <span className='text-sm font-semibold'>True</span>
          </Radio>
        </RadioGroup>
        <Button className="m-2 p-2 cursor-pointer bg-blue-100" type="submit" form="bug-repro-form">Submit</Button>
      </form>
      Value: <>{myValue.toString()}</>
      <br/>
      Form Value: <>{formValue}</>
    </div>
  )
}

export default App
