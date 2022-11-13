import Head from 'next/head'
import Header from '../components/header/header'
import AddItemButtom from '../components/items/add-item-buttom'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hold My Pass</title>
        <meta name="description" content="Descentralized Password Manager" />
        <link rel="icon" href="img/favicon.png" />
      </Head>
      <Header/>
 <AddItemButtom/>
    
      <main>
    </main>
    </div>
  )
}
