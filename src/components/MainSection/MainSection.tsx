// Importing Dependencies,files and Icons
import React from 'react';
import TransformIcon from '@mui/icons-material/Transform';
import CompressIcon from '@mui/icons-material/Compress';
import EditIcon from '@mui/icons-material/Edit';

/**
 * MainSection component: This component serves as the main content area 
 * for the home page, showcasing the core functionalities of the PDF services offered.
 * 
 * @returns {JSX.Element} The main section layout containing service descriptions.
 */
const MainSection: React.FC = () => {
    return (
        <>
            <div className='w-[100vw] h-[60vh]'>
                {/* Header section with a title */}
                <div className='w-[100%] h-[50%] flex flex-wrap justify-center items-center text-center p-[2%] md:p-[3%] lg:h-[40%]'>
                    <p className='text-[#33333b] font-600 text-2xl md:text-3xl lg:text-5xl'>
                        Transform, Edit, and Compress Your PDFs Effortlessly
                    </p>
                </div>

                {/* Description section providing an overview of services */}
                <div className='w-[100%] h-[50%] flex flex-wrap justify-center items-center text-center p-[5%] md:p-[8%] text-wrap lg:h-[40%] lg:px-[10%] lg:py-[3%]'>
                    <p className='text-[#33333b] font-400 text-md md:text-lg lg:text-3xl'>
                        Our website offers seamless PDF solutions for all your document management needs. 
                        Convert PDFs to any compatible format, edit PDFs with ease, and compress PDF files for efficient storage and sharing.
                    </p>
                </div>
            </div>

            {/* Service features section with icons and descriptions */}
            <div className='w-[100%] h-[fit-content] flex flex-col justify-center items-center mt-[5%] p-[2%] md:p-[5%] lg:m-[0] lg:flex-row lg:h-[30vh]'>
                {/* PDF Transformation feature */}
                <div className='w-[90%] h-[15vh] my-[5%] rounded-lg flex shadow-all-around lg:mx-[2%] cursor-pointer'>
                    <div className='w-[30%] h-[100%] flex justify-center items-center'>
                        <TransformIcon className='text-[#e4342c] !w-[60%] !h-[60%]' />
                    </div>
                    <div className='w-[70%] h-[100%] flex flex-wrap justify-start items-center text-xs p-[5%] md:p-[3%] text-start md:text-base md:font-thin lg:p-[4%] lg:text-lg overflow-hidden'>
                        <p className='whitespace-normal'>
                            Effortlessly convert your PDFs to any compatible format with our advanced PDF converter tool.
                        </p>
                    </div>
                </div>

                {/* PDF Compression feature */}
                <div className='w-[90%] h-[15vh] my-[5%] rounded-lg flex shadow-all-around lg:mx-[2%] cursor-pointer'>
                    <div className='w-[30%] h-[100%] flex justify-center items-center'>
                        <CompressIcon className='text-[#e4342c] !w-[60%] !h-[60%]' />
                    </div>
                    <div className='w-[70%] h-[100%] flex flex-wrap justify-start items-center text-xs p-[5%] md:p-[3%] text-start md:text-base md:font-thin lg:p-[4%] lg:text-lg overflow-hidden'>
                        <p className='whitespace-normal'>
                            Reduce PDF file sizes without compromising quality using our efficient PDF compression tool.
                        </p>
                    </div>
                </div>

                {/* PDF Editing feature */}
                <div className='w-[90%] h-[15vh] my-[5%] rounded-lg flex shadow-all-around lg:mx-[2%] cursor-pointer'>
                    <div className='w-[30%] h-[100%] flex justify-center items-center'>
                        <EditIcon className='text-[#e4342c] !w-[60%] !h-[60%]' />
                    </div>
                    <div className='w-[70%] h-[100%] flex flex-wrap justify-start items-center text-xs p-[5%] md:p-[3%] text-start md:text-base md:font-thin lg:p-[4%] lg:text-lg overflow-hidden'>
                        <p className='whitespace-normal'>
                            Easily modify your PDFs with our intuitive PDF editing tools.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainSection;
