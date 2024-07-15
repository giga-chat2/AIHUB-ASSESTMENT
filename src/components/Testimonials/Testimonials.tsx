import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

interface TestimonialCardProps {
  imagePath: string
  name: string
  title: string
  review: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imagePath, name, title, review }) => {
  return (
    <>
      <div className='w-[80%] h-[48vh] rounded-xl my-[5%] shadow-all-around p-[1%] md:w-[40%] md:h-[35%] lg:w-[20%] lg:my-[0] lg:mx-[2%] lg:h-[90%] ' >
        <div className='w-[100%] h-[50%]  flex justify-center items-center ' >
          <div className='w-[120px] h-[120px] rounded-full  overflow-hidden ' >
            <img src={`${imagePath}`} alt='person' className='w-full h-full object-cover ' />
          </div>
        </div>
        <div className='w-[100%] h-[50%]  flex flex-col justify-center items-center ' >
          <div className='w-[100%] h-[30%]  flex justify-center flex-col items-center overflow-hidden ' >
            <p className='text-[#33333b] font-600 text-lg lg:text-3xl whitespace-normal'>{name}</p>
            <p className='text-[#33333b] font-400 text-sm  lg:text-xl whitespace-normal'>{title}</p>
          </div>
          <div className='w-[100%] h-[20%]  flex justify-center items-center ' >
            <StarIcon className='text-[#f7d154] ' />
            <StarIcon className='text-[#f7d154] ' />
            <StarIcon className='text-[#f7d154] ' />
            <StarIcon className='text-[#f7d154] ' />
            <StarHalfIcon className='text-[#f7d154] ' />
          </div>
          <div className='w-[100%] h-[50%] flex justify-center items-center p-[5%] text-center overflow-hidden'>
            <p className='text-[#33333b] font-400 text-sm lg:text-xl whitespace-normal'>
              {review}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}


const Testimonials: React.FC = () => {

  const imagePaths = ['person1.webp', 'person2.webp', 'person3.webp', 'person4.webp']
  const names = ['John Doe', 'Ryan Estern', 'Anni Anderson', 'Jane Smith']
  const titles = ['CEO of BeyondChats', 'CTO of DevFusion.ai', 'Product Manager at FlyCircuit', 'CFO of Finplex Solutions']
  const reviews = [
    "Fantastic tool! It made editing my PDFs a breeze.",
    "Quick and efficient PDF conversion. Highly recommend!",
    "I love how easy it is to compress PDFs without losing quality.",
    "Editing PDFs has never been easier. This site is a lifesaver!"
  ]
  return (
    <>
      <div className='w-[100vw] h-[fit-content]  flex flex-col justify-center items-center py-[5%] ' >
        <h1 className='text-[#33333b] font-600 text-2xl md:text-3xl lg:text-5xl '>Testimonials</h1>
        <div className='flex flex-col justify-center items-center w-[100%] h-[fit-content] mt-[5%] md:h-[150vh] md:flex md:flex-wrap lg:flex-wrap lg:h-[60vh]  '>
          {
            imagePaths.map((imagePath, index) => {
              return (
                <TestimonialCard imagePath={imagePath} name={names[index]} title={titles[index]} review={reviews[index]} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Testimonials