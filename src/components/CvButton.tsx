import { FaFilePdf } from "react-icons/fa6";


const CvButton = () => {
  return (
    <div className="flex justify-center cursor-pointer z-[30]">
      <a className='inline-block w-[170px] p-3 text-lg rounded-xl text-white cursor-pointer bg-red-500 bg-opacity-50 hover:bg-red-600 '
      href='/CV_Mykola_Nedilko.pdf'
      download="CV_Mykola_Nedilko"
      target="_blank"
      > 
     <FaFilePdf className="inline mr-1"/>Download CV 
      </a>
    </div>
  )
}
export default CvButton;