function MyStory(){
    return(
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-purple-600 shadow shadow-2xl mt-8">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">My Story</h1>
        <section className="mb-6">
        <h2 className="text-2xl font-semibold text-teal-500 mb-2"> Why I created This Platform</h2>
        <p> I've always been passionate about mental health of my own struggles and experiences. I know how important it is to find support, resources, and understand during tough times. That's why I created this platform - to share what I've learned and to provide a space for other to heal and grow.</p>
        </section>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-teal-500 mb-2"> My Journey</h2>
            <p className=" text-gray-700"> My own journey with mental health was not easy, and I've faced moments of doubt and anxiety. But over time, I found that opening up, seeking help, and understanding myself better help others go others go through a similar process and show that mental health is something we can all work on, together.</p>
        </section>
        <section className="mb-6">
        <h2 className="text-2xl font-semibold text-teal-500 mb-2">Let's Connect</h2>
        <p className=" text-gray-700"> If your have questions, want to talk, or need someone to listen, feel free to reach out. You're not alone on this journey.</p>
        </section>
        </div>
    )
}
export default MyStory;