import { useState } from 'react'
import './Field.css'

interface Props {
    height: string,
    width: string,
    name: string,
    mBottom?: string,
    fontSize?: string,
    type?: string,
}

export default function Field({height, width, name, mBottom='0', fontSize='1.5vw', type='text'}: Props) {
  const [value, setValue] = useState('')

  return (
    <div className='input-wrap'>
      <input 
        type={type} 
        name={name} 
        value={value}
        id="" 
        style={{width: width, 
                height: height,
                marginBottom: mBottom,
                fontSize: fontSize}}
        onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}
