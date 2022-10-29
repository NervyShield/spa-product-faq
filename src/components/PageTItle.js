import Head from 'next/head';

export default function PageTittle(children) {
    return(
        <Head>
            <title>
                {children}
            </title>
        </Head>
    )
}