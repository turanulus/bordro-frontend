import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { GetStaticProps } from 'next'
import { Button, Grid, Paper, TextField } from '@material-ui/core'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className='layout-container'>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField size="small" id="standard-basic" label="Ad" />
                <br />
                <TextField size="small" id="standard-basic" label="Soyad" />
                <br />
                <TextField size="small" id="standard-basic" label="TC Kimlik No" />
                <br />
                <br />  
                <Button size="small" variant="contained" color="primary" href="#contained-buttons">
                  Kaydet
                </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Layout>
  )
}
