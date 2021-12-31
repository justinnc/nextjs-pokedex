import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return <div className={styles.container}>Home Page</div>;
}

export function getStaticProps() {
  return {
    props: {},
    redirect: {
      destination: '/pokemon',
    },
  };
}
