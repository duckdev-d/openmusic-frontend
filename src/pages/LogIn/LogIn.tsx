import Line from '../../components/Line/Line'
import Logo from '../../components/Logo/Logo'
import Blur from '../../components/Blur/Blur'
import Text from '../../components/Text/Text'
import SecondaryText from '../../components/SecondaryText/SecondaryText'
import Field from '../../components/Field/Field'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import Link from '../../components/Link/Link'
import './LogIn.css'

function LoginPage() {

  return (
    <>
    <Blur width="35vw" mLeft="15vw" mTop="-15vw"></Blur>
    <Blur width="35vw" mLeft="-15vw" mTop="15vw"></Blur>

    <div className="form-wrap">
      <Logo width="6vw" mBottom="2vw" />
      <Line color="white" width="23vw" height="0.2vw" mBottom="2vw"/>
      <Text size="2vw" weight="bold" mBottom="4vw">Log in to OpenMusic</Text>

      <form action="" method="post">
        <SecondaryText size="1.3vw" mBottom="0.5vw">Username</SecondaryText>
        <Field height="2.5vw" width="21vw" name="username" mBottom="1vw"></Field>
        <SecondaryText size="1.3vw" mBottom="0.5vw">Password</SecondaryText>
        <Field height="2.5vw" width="21vw" name="password" mBottom="4vw"></Field>
        <PrimaryButton height="3.2vw" width="21vw" mBottom="2vw" fontSize="1.3vw">Countinue</PrimaryButton>
      </form>

      <div className="no-account">
        <Text size="0.95vw">Don't have an account?</Text>
        <Link href='/signup' size="0.95vw" weight="bold">Sign up to OpenMusic</Link>
      </div>

    </div>
    </>
  )
}

export default LoginPage
