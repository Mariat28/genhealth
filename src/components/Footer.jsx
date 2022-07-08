import {BsFillSuitHeartFill} from 'react-icons/bs';
const Footer = () => {
  return(
    <div className="flex justify-center shadow-md w-full absolute bottom-0 mr-6 text-base items-center p-2">
      <span>Hand-crafted and Made with</span>
      <BsFillSuitHeartFill className='text-red-700 ml-1'/>
      <span className='mr-1 ml-1'>by</span>
      <span className='text-blue-400 mr-4'> Mariat Ndagire</span>
    </div>
  )
}
export default Footer;