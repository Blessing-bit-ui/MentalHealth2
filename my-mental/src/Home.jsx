import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <h1 className="text-blue-600 text-center font-bold text-6xl"> Welcome to Mindful Space</h1>
            <p className=" text-gray-700 text-lg max-w-l text-center mt-8"> A safe place to learn about mental, find resources and take steps toward a healthier mind and heart.</p>
            <Link to="/about"className="text-blue-700 hover:underline">Learn More</Link>
        </div>
    )
}
export default Home;