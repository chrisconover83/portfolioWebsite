import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20 '>
            Although I am a self-taught developer, I have always had a love for technology and a strong desire to learn. I'm a problem solver at heart and I love using my creativity to come up with unique solutions to complex challenges. I have a knack for taking abstract concepts and turning them into something tangible and useful. I have experience in both front-end and back-end development. My goal as a developer is to continue to grow and learn as much as possible, while also delivering high-quality work.  I'm excited to take on new projects and help bring ideas to life. I believe that programming is not just about writing code, it's about solving problems in creative ways. I have a knack for thinking outside the box and finding unique solutions to complex problems.  In my free time, you'll find me spending time with my family, playing and watching sports, and experimenting with new technologies.  
            </p>
            <br />
            <p className='text-xl'>
            Thank you for visiting my website. I hope you enjoy exploring my projects and learning more about my skills and experiences. Let's build something great together!
            </p>
        </div>
    </div>
  )
}

export default About