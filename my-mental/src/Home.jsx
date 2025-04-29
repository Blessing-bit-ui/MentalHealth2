import { Link } from 'react-router-dom'
import blocks from './assets/blocks.jpeg'
import Encouragement from './assets/Encouragement.jpg'
import mental from './assets/mentalsaying.png'

function Home(){
  return(
    <div className="justify-center items-center flex">
      <div className="min-h-[80vh] text-center px-4 bg-gradient-to-r from-blue-500 to-purple-500 w-screen">
        <h1 className="text-blue-600 text-center font-bold text-2xl mb-4 mt-10 md:text-6xl"> Welcome to Mindful Space</h1> 
        <p className=" text-gray-700 text-sm md:text-base lg:text-lg whitespace-normal text-center mt-6 mb-70 md:mb-10 "> A safe place to learn about mental, find resources and take steps towards a healthier mind and heart.</p>
        <Link to="/about" className="text-blue-700 hover:underline">Learn More </Link>
      </div>
    </div>
  )
}
export default Home;