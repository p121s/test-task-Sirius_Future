import Head from 'next/head'
import Image from 'next/image'
import { StartGame } from '../components/StartGame'
import { H1 } from '../styles/H1.styled'
import { Main } from '../styles/Main.styled'

export default function Home() {
  return (
    <>
      <Main>
        <StartGame />
      </Main>
    </>
  )
}
