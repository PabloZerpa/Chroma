import Head from 'next/head';
import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
          <title>Chroma</title>
      </Head>
      <Container>
          <Main />
          <Footer />
      </Container>
    </>
  )
}
