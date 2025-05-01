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
        <h1 className="font-bold text-center text-2xl md:text-left">
          Helpful Mental Health Podcast
        </h1>
        {titles.map((video, index) => (
          <li className="text-[16px] hover:underline" key={index}>
            <a href={video.link}>{video.title}</a>
          </li>
        ))}
        <div className="mt-3">
        <h2 className="font-bold text-center md:text-left">Other Helpful Resources</h2>
        <ul>
          <li>
            <span className="font-bold">CBT(Cognitive Behavioral Therapy):</span> Focuses on changing negative
            thought patterns and behaviours. Widely used for
            anxiety,depression,PTSD.
          </li>
          <li>
            <span className="font-bold">ACT(Acceptance & Commitment Therapy):</span> Helps people accepts thoughts
            and feelings, stay present, and commit to value-based actions.
          </li>
          <li>
            <span className="font-bold">DBT( Dialectical Behaviour Therapy):</span> Developed for people with
            intense emotions; combines CBT with mindfulness
          </li>
          <li>
            <span className="font-bold">Mindfulness-Based Therapy:</span> Uses medication and present-moment
            awareness to reduce stress and anxiety.
          </li>
          </ul>
        </div>
        <div className="mt-6">
        <h2 className="font-bold"> Online Mental Health Tools</h2>
        <li>
          <a href="https://www.therapistaid.com/">
            <span className="hover:underline">Therapist Aid </span>
          </a>
          : Worksheets and resources for CBT, DBT ETC.
        </li>
        <li>
          <a href="https://www.samhsa.gov/mental-health"><span className="hover:underline">MentalHealth.gov</span></a>:
          US government-backed education on mental health topics.
        </li>
        <li>
          <a href="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself">
           <span className="hover:underline">Centre for Clinical Interventions(CCI)</span>
          </a>
          :Free workbooks on perfectionism, anxiety, and more.
        </li>
        <li>
          <a href="https://www.verywellmind.com/"><span className="hover:underline">Verywell Mind</span></a>:Easy-to-read mental health tips, articles, self-help guides
        </li>
        </div>
      </div>
    );
};
 export default PodcastTitles; 