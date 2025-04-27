import { Link } from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1> Welcome to Mindful Space</h1>
            <p> A safe place to learn about mental, find resources and take steps toward a healthier mind and heart.</p>
            <Link to="/about"> Learn More</Link>
        </div>
    )
}
export default Home