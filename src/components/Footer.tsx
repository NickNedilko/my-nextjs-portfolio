import Link from "next/link";



const Footer = () => {

  const date:number = new Date().getFullYear();

  return (
 <div className="fixed bottom-0 left-0 right-0 pb-5 flex justify-center items-center z-10 px-4 sm:px-8 md:px-16">
      <p className="text-white text-center text-sm sm:text-base">
        © {date}. All rights reserved. Developed by{" "}
        <Link
          className="hover:text-red-500 text-lg sm:text-xl"
          href="https://github.com/NickNedilko"
          aria-label="link to Github"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          Mykola Nedilko
        </Link>
      </p>
    </div>
  )
}

export default Footer;