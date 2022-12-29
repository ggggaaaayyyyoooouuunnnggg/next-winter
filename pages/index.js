import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="home">
      <h1 className="text-3xl text-blue-500">next ecommerce</h1>
      <p>Author: Gayoung Yoo</p>
      <p>웹서버보안프로그래밍 겨울학기</p>
    </Layout>
  )
}
