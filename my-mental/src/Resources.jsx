import { useState, useEffect } from 'react'
const PodcastTitles =()=>{
  const[titles, setTitles]=useState([])
  useEffect(()=>{
    const APIkey ="AIzaSyAOsxj5GIZp1AOWnbX75Sux_mAJBIizQR4";
    const Url =
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=mental+health+podcast&type=video&maxResults=6&key=${APIkey}`;
     fetch(Url)
     .then(response => response.json())
     .then(data =>{
      const videoData=data.items.map(item=>({
        title:item.snippet.title,
        link:`https://www.youtube.com/watch?v=${item.id.videoId}`,
      }));
    setTitles(videoData);
    })
     .catch(error=>console.error('Error fetching videos:', error));
    }, []);
    return (
      <div className=" flex flex-col justify min-h-[80vh] text-left px-4 bg-purple-100 shadow shadow-2xl mt-8">
        <h1 className="font-bold text-center text-2xl">Helpful Mental Health Podcast</h1>
        {titles.map((video, index) => (
         <li className="text-[16px] hover:underline" key={index}><a href={video.link}>{video.title}</a></li>
        ))}
        <h2>Other Helpful Resources</h2>
        
      </div>
    );
};
 export default PodcastTitles; 