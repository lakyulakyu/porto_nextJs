import Head from "next/head"

export default function Layout(props){
    return (
<div>
    <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/public/image/pict-1.png"></link>
    </Head>
    {props.childern}
</div>
    )
}