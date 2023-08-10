import { Grid, Typography } from '@mui/material'
import awspic from '../../assets/shopifypage.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import aws2 from '../../assets/andro1.jpg'
import aws3 from '../../assets/andro2.jpg'
import { MAIN_COLOR } from '../../constant'
import SendMessage from '../../components/SendMessage'

const Shopify = () => {
    return (
        <>
            <Header />
            <Grid container sx={{ backgroundPosition: 'center', bgcolor: '#595959 ', backgroundBlendMode: 'multiply', p: '150px', backgroundImage: `url(${awspic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <Grid item>
                    <Typography variant='h1' sx={{ color: 'white', fontWeight: 900 }}>Shopify</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center', m: '50px 50px', pr: '100px' }}>
                <Grid item sx={{ width: '50%' }}>
                    <img width={'96%'} height={'100%'} src={aws2} alt='pic' style={{ borderRadius: '100px' }} />
                </Grid>
                <Grid item sx={{ width: '50%' }}>
                    <Typography paragraph textAlign={'left'}>
                        <span style={{ fontSize: '40px', color: MAIN_COLOR }}>Shopify Content Analysis</span> <br />Shopify Content Analysis is an AWS Solutions Implementation that customers can use to obtain a broader understanding of their media content through machine learning. The solution brings together the capabilities of different AWS machine learning tools to generate meaningful insights from metadata gleaned through video analysis. Customers can use the solutions implementation, modify it to fit their own workflows and build their own analytical solutions for media in the AWS Cloud.
                        The AWS Content Analysis solution employs Amazon Rekognition for highly accurate object, scene, and activity detection; Amazon Transcribe for automatic speech recognition; Amazon Translate for content translation between languages; and Amazon Comprehend to extract key phrases and entities from media file transcripts. To learn more about AWS Content Analysis, see the AWS Solutions Implementation webpage.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center', m: '50px 50px', pr: '100px' }}>
                <Grid item sx={{ width: '50%' }}>
                    <Typography paragraph textAlign={'left'}>
                        <span style={{ fontSize: '40px', color: MAIN_COLOR }}>Cloud computing with Shopify</span> <br />Amazon Web Services (Shopify) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster.
                    </Typography>
                </Grid>
                <Grid item sx={{ width: '50%' }}>
                    <img width={'96%'} height={'100%'} src={aws3} alt='pic' style={{ borderRadius: '100px' }} />
                </Grid>
            </Grid>
            <SendMessage />
            <Footer />
        </>
    )
}

export default Shopify
