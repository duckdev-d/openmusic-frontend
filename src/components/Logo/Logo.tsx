import logo from '../../assets/logo.png'

interface Props {
    width: string,
    mBottom?: string,
}

export default function Logo({width, mBottom='0'}: Props) {
  return (
    <div>
        <img src={logo} alt="" style={{
                                   width: width,
                                   marginBottom: mBottom
        }}/>
    </div>
  )
}
