import Link from 'next/link'
const SecondBase = () => {
    return ( 

        <div className="logo">
            <h1>Which Province were you born in</h1>
            <Link href="../Canada/Ontario"><a>Ontario</a></Link> <br />
            <Link href="/"><a>back to homeplate</a></Link>
        </div>
     );
}
 
export default SecondBase;