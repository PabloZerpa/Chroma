
import style from '../styles/Main.module.css';
import Head from 'next/head'
import Container from '../components/Container';
import Gallery from '../components/Gallery';

export default function Explore() {
  return (
    <>
      <Head>
            <title>Chroma - Explore</title>
      </Head>
      <Container>
          <div className={style.main}>
            <Gallery />
          </div>
      </Container>
    </>
  )
}