
import style from '../styles/Main.module.css';
import Head from 'next/head'
import Container from '../components/Container';
import Join from '../components/Join';

export default function About() {
  return (
    <>
      <Head>
            <title>Chroma - About</title>
      </Head>
      <Container>
        <div className={style.main}>
            <Join />
        </div>
      </Container>
    </>
  )
}