
import style from '../styles/Main.module.css';
import Head from 'next/head'
import Container from '../components/Container';
import Categories from '../components/Categories';

export default function Forums() {
  return (
    <>
      <Head>
            <title>Chroma - Forums</title>
      </Head>
      <Container>
        <div className={style.forums}>
          <Categories />
        </div>
      </Container>
    </>
  )
}