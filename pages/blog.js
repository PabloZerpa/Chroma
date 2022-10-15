
import style from '../styles/Main.module.css';
import Head from 'next/head'
import Container from '../components/Container';
import Slider from '../components/Slider';

export default function Blog() {
  return (
    <>
      <Head>
            <title>Chroma - Blog</title>
      </Head>
      <Container>
          <div className={style.main}>
              <Slider />
          </div>
      </Container>
    </>
  )
}