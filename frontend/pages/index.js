import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Song from '../components/Song'
import SongFeed from '../components/SongsFeed'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] h-screen overflow-scroll">
      <Navbar />
      <SongFeed />
    </div>
  )
}
