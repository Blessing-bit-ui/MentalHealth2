import { Link } from 'react-router-dom'
import blocks from './assets/blocks.jpeg'
import Encouragement from './assets/Encouragement.jpg'
import mental from './assets/mentalsaying.png'


function Home(){
    return(
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-gradient-to-r from-blue-500 to-purple-500">
            <div>
            <h1 className="text-blue-600 text-center font-bold text-6xl"> Welcome to Mindful Space</h1>
            <p className=" text-gray-700 text-lg max-w-l text-center mt-8"> A safe place to learn about mental, find resources and take steps toward a healthier mind and heart.</p>
            <Link to="/about"className="text-blue-700 hover:underline">Learn More</Link>
         </div>
         <div>
            <img 
            height={300}
            src={blocks}
            alt="an image of mental health"
            />
            <img 
            height={300}
            src={Encouragement}
            weight={100}
            />
         </div>
        </div>
    )
}
export default Home;