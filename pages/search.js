import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CSE_ID } from '../keys';
import Response from '../Response';
import { useRouter } from 'next/router';

import SearchResults from '../components/SearchResults';

export default function Search({results}){

    const router = useRouter();

    //Testing purposes
    console.log(results);

    return <div>
            <Head>
                <title>{router.query.tem} - Google Search</title>
            </Head>

            {/**Header */}
            <Header />
            {/**Search Result */}
            <SearchResults results={results} />

        </div>;
        
    
}

export async function getServerSideProps(context){
   
    const useDummyData = true;
    const startIndex =  context.query.start || "0";
    

    //Server side rendering
    
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CSE_ID}
    &q=${context.query.term}&start=${startIndex}`)
    .then((response) => response.json());
    //Pass the result the client
    return {
        props: {
            results: data,
        }
    }
}
