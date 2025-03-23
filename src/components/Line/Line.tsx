interface Props {
    width: string,
    height: string,
    color: string,
    mBottom?: string,
}

export default function Line({width, height,  color, mBottom='0'}: Props) {
  return (
    <div 
        style={{width: width, 
                height: height, 
                background: color,
                minHeight: '3px',
                marginBottom: mBottom}}>
    </div>
  )
}
