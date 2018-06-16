import Head from 'next/head'
import Link from 'next/link'
import Byline from '../components/Byline'

export default () => (
  <div>
    <Head>
      <title>划龍船</title>
    </Head>
    <h1>播加油 mp3 檔名</h1>
<p>http://localhost:3000/static/623518.mp3</p>

 <Link href="/static/623518.mp3">
      <a>Audio Page</a>
  
</Link>

    <Byline author='Dan Zajdband' />
    <amp-img src='/static/cat.jpg' width='47' height='35' layout='responsive' alt='Meow' />
  </div>
)
