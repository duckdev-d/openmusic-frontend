import React from "react"

interface Props {
    size: string,
    weight?: string,
    color?: string,
    children?: React.ReactNode,
    mBottom?: string,
}

export default function Text({size, weight='normal', color='white', children, mBottom}: Props) {
  return (
    <div className='text'>
        <p style={{fontSize: size, fontWeight: weight, color: color, marginBottom: mBottom}}>{children}</p>
    </div>
  )
}
