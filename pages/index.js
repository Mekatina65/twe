import Link from 'next/link'
const HomePlate = () => {
  return ( 

    <div className="logo">
      <h1>Which Country were you born in</h1>
      <Link href="../Canada"><a>Canada</a></Link> <br />
      <Link href="../Canada"><a>United States</a></Link> <br />
      <Link href="../Canada"><a>Mexico</a></Link>
    </div>
   );
}
 
export default HomePlate;