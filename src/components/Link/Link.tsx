import React from "react"
import './Link.css'

interface Props {
    size: string,
    href: string,
    weight?: string,
    color?: string,
    children?: React.ReactNode,
    mBottom?: string,
}

export default function Link({size, weight='normal', color='white', mBottom='0', href, children}: Props) {
  return (
    <div className='link'>
        <a href={href} style={{fontSize: size, fontWeight: weight, color: color, marginBottom: mBottom}}>{children}</a>
    </div>
  )
}
