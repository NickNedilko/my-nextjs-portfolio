import Link from "next/link";



const Footer = () => {

  const date:number = new Date().getFullYear();

  return (
<div className="fixed bottom-0 left-0 right-0 pb-5 flex justify-center items-center z-10">
      
    <p className=" text-white ">© {date}. All rights are reserved. Developed by <Link className="hover:text-red-500 text-lg" href="https://github.com/NickNedilko" aria-label="link to Github" rel="noopener noreferrer nofollow" target='_blank'>Mykola Nedilko</Link></p>
    </div>
  )
}

export default Footer;