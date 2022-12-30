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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere blanditiis harum necessitatibus laudantium in maiores accusamus, ex possimus hic ad cupiditate deserunt voluptates illo et inventore iure iste nostrum qui minus! Sint ab voluptatum reprehenderit quis illum voluptas amet corrupti. Error laudantium explicabo deserunt molestiae aspernatur, officiis totam aliquid.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem obcaecati dignissimos optio mollitia consectetur nisi, cumque dolorum. Et, blanditiis, in, dolor hic eum deleniti aspernatur praesentium aut explicabo doloribus asperiores sunt a! Porro doloribus repellat soluta eum ex, delectus rerum modi quisquam vitae debitis ipsa magnam exercitationem fugit id.
            </p>
        </div>
    </div>
  )
}

export default About