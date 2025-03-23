import React from "react"

interface Props {
    size: string,
    weight?: string,
    color?: string,
    children?: React.ReactNode,
    mBottom?: string,
}

export default function SecondaryText({size, weight='normal', color='rgb(192, 192, 192)', children, mBottom}: Props) {
  return (
    <div className='secondary-text'>
        <p style={{fontSize: size, fontWeight: weight, color: color, marginBottom: mBottom}}>{children}</p>
    </div>
  )
}
