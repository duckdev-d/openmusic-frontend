import './Field.css'

interface Props {
    height: string,
    width: string,
    value: string,
    setValue: (value: string) => void,
    mBottom?: string,
    fontSize?: string,
    type?: string,
}

export default function Field({height, width, value='', setValue, mBottom='0', fontSize='1.5vw', type='text'}: Props) {

  return (
    <div className='input-wrap'>
      <input 
        type={type}
        value={value}
        style={{width: width, 
                height: height,
                marginBottom: mBottom,
                fontSize: fontSize}}
        onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}
