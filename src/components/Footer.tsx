import Link from "next/link";



const Footer = () => {

  const date:number = new Date().getFullYear();

  return (
    <div className="fixed bottom-0  justify-center  pb-5">
      
    <p className="text-center text-white">© {date}. All rights are reserved. Developed by <Link href="https://github.com/NickNedilko" aria-label="link to Github" rel="noopener noreferrer nofollow" target='_blank'>Mykola Nedilko</Link></p>
    </div>
  )
}

export default Footer;