import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CSE_ID } from '../keys';
import Response from '../Response';

import { useRouter } from 'next/router';

export default function Search(results){

    //Testing purposes
    console.log(results);


    const router = useRouter();
    return <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/**Header */}
            <Header />
            {/**Search Result */}
            <SearchResults results={results} />

        </div>;
        
    
}

export async function getServerSideProps(context){
    const useDummyData = false;

    const startIndex = context.query.startIndex || "0";
    //Server side rendering
    const data = useDummyData? Response: await fetch(`https://www.googleapis.com/customsearch/v1?key=
    ${API_KEY}&cx=${CSE_ID}&q=${context.query.term}&start=${startIndex}`).then(
        res => res.json()
    );
    //Pass the result the client
    return {
        props: {
            results: data,
        }
    }
}
