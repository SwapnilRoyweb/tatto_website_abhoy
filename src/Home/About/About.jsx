import React from 'react';
import pic from '../../assets/IMG_20220409_191017_Bokeh.jpg'

const About = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-black to-slate-700 flex flex-col lg:flex-row items-center lg:items-start justify-evenly gap-5 lg:gap-10 w-full min-h-screen'>
                <div className='w-1/2'>
                    <img src={pic} alt="" className='w-11/12 h-fit lg:my-24 mx-auto ml-5 lg:ml-20 rounded-3xl' />
                </div>
                <div className='w-1/2 text-white mx-20 mt-10 lg:mt-32'>
                    <div>
                        <h1 className='text-3xl font-bold mb-5'>Why me?</h1>
                        <p>Choosing a certified and skilled tattoo artist is essential to ensure your safety, receive a high-quality piece of body art and have a positive overall experience. Whileit may be tempting to cut costs by going to a cheaper, uncertified artist, it's crucial to prioritize your health and the long term appearance of your tattoo.</p>
                    </div>
                    <div className='my-10'>
                        <h1 className='text-4xl font-bold mb-5 text-center'>5 reasons why tattoo are expensive</h1>
                        <ul className='list-disc flex flex-col gap-3 text-justify mt-8'>
                            <li className='bg-gradient-to-b from-slate-500 to-blue-900 py-3 px-5 rounded-2xl'><span className='text-xl font-semibold'>Skill & Expertise :</span> A well-trained and experienced tattoo artist commands higher prices because of their skill, knowledge and ability to create intricate and high-quality designs. Tattooing is an art form and skilled artists invest significant time and effort into honing their craft.</li>
                            <li className='bg-gradient-to-b from-slate-500 to-blue-900 py-3 px-5 rounded-2xl'><span className='text-xl font-semibold'>Quality & Safety :</span> Reputable tattoo studios prioritize the safety and health of their clients. they use sterie equipment, disposal needles and high-quality ink to ensure a safe and hygienic environment. these safety measures come at a cost, which is reflected in the overall price.</li>
                            <li className='bg-gradient-to-b from-slate-500 to-blue-900 py-3 px-5 rounded-2xl'><span className='text-xl font-semibold'>Customization :</span> Many people prefer custom tattoos that are unique and tailored to their specific preferences and ideas. Creating custom designs involves additional time and effort from the artist, which can increase the cost of the tattoo.</li>
                            <li className='bg-gradient-to-b from-slate-500 to-blue-900 py-3 px-5 rounded-2xl'><span className='text-xl font-semibold'>Tattoo Size & Complexity :</span> Larger and more complex tattoos require more time and resources to complete. The size, detail and intricacy of the design all impact the cost. Artist typically charge by the hour, so a bigger or more intricate tattoo will naturally cost more.</li>
                            <li className='bg-gradient-to-b from-slate-500 to-blue-900 py-3 px-5 rounded-2xl'><span className='text-xl font-semibold'>Overhead Costs :</span> Tattoo studios have overhead costs such as rent, utilities, insurance and maintaining a clean and safe workspace. These costs are factored into the overall price of a tattoo. Additionally, many studios have to pay for licences and permits to operate legally, which can also contribute to higher prices.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;