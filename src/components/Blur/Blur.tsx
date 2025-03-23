import blur from '../../assets/blur.png'
import './Blur.css'

interface Props {
    width: string,
    mLeft: string,
    mTop: string,
    mBottom?: string,
}

export default function Blur({width, mLeft, mTop, mBottom='0'}: Props) {
  return (
    <div className='blur'>
        <img style={{width: width, 
                marginLeft: mLeft,
                marginTop: mTop,
                marginBottom: mBottom}} src={blur} alt="" />
    </div>
  )
}
