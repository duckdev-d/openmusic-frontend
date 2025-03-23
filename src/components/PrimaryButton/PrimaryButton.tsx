import './PrimaryButton.css'
import React from 'react'

interface Props {
    height: string,
    width: string,
    children?: React.ReactNode,
    mBottom?: string,
    fontSize?: string,
}

export default function PrimaryButton({height, width, children, mBottom, fontSize='1vw'}: Props) {
  return (
    <div className='primary-btn-wrap'>
        <button style={{width: width, height: height, marginBottom: mBottom, fontSize: fontSize}}>{children}</button>
    </div>
  )
}
