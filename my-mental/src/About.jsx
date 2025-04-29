function About() {
  return (
    <div className="p-8 mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center md:text-5xl">

        About Mental Health
      </h1>
      <div className="mb-6">
        <h2 className=" text-2xl font-semibold text-green-600 text-center md:text-3xl">
          What is Mental Health
        </h2>
        <p className=" text-gray-700 leading-relaxed md:text-[18px]">
          Mental health encompasses our emotional, psychological, and social
          well-being, and it significantly impacts how we think, feel, and act.
          It also helps determine how we stress, relate to others, and make
          helth choices.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-2 text-center md:text-3xl">
          
          Why Mental Health matters
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 md:text-[18px]">
          Mental health is important at every stage of Life, from childhood and
          adolescense through adulthood.Good mental health strengthens our
          ability to cope with daily challenges and build meaningful
          relationships.It also promotes the following:
        </p>
        <ul>
          <li className="leading-relaxed mb-2 md:text-[16px]">
            <span className="font-bold md:text-[18px] italic">
              Quality of life:
            </span>
            Mental and emotional health are directly linked to the quality of
            our lives and our levels of life satisfaction.
          </li>

          <li className="leading-relaxed mb-2 md:text-[16px]">
            <span className="font-bold md:text-[18px] italic">
              Physical health:
            </span>
            There is a strong connection between mental health and physical
            health. Stress, for example, can lead to chronic conditions like
            heart disease.
          </li>
          <li className="leading-relaxed mb-2 md:text-[16px]">
            <span className="font-bold md:text-[18px] italic">
              Relationships:
            </span>
            Our mental and emotional state affects how we interact with others.
            Being in a good mental state allows us to form positive and healthy
            relationships.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-2 text-center md:text-3xl">
          How to care for Your Mental Health
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 md:text-[18px] ">
          Taking care of your mental health involves prioritizing your emotional
          and psychological well-being through practices like mindfulness,
          connecting with others, and engaging in activities you enjoy. It also
          includes incorporating self-care, maintaining a healthy lifestyle, and
          seeking professional help when needed.Talking to some you trust also
          goes a long way.
        </p>
      </div>
      <blockquote className=" italic text-center text-xl text-green-500 mt-8">
        "Your Mental Health is a priority. Your happiness is an essentail. Your
        self-care is a necessity"
      </blockquote>
    </div>
  );
}
export default About;
