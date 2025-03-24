

export default function HomePage() {
  return (
    <>
    <h1>home page</h1>
    <p>your access token is {localStorage.getItem('jwt')}</p>
    </>
  )
}
