import Header from './header';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title> PokéDex </title>
        <meta
          name='description'
          content='a simple pokédex for your pokemon needs.'
        />
      </Head>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
