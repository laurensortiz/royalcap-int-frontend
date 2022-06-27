import { useRouter } from 'next/router'
import { useEffect } from 'react'

function About() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/my-royal')
  })
  return <div>Register</div>
}

export default About
