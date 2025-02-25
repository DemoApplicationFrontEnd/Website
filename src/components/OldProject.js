import React, { useState } from 'react'
import './OldProject.css'
import pic11 from './../assets/projectsPics/pic11.jpeg'
import pic12 from './../assets/projectsPics/pic12.jpeg'


import oldpic1 from './../projectsPics/oldpics/old1.jpeg'
import oldpic2 from './../projectsPics/oldpics/old2.jpeg'
import oldpic3 from './../projectsPics/oldpics/old3.jpeg'
import oldpic4 from './../projectsPics/oldpics/old4.jpeg'
import oldpic5 from './../projectsPics/oldpics/old5.jpeg'
import oldpic6 from './../projectsPics/oldpics/old6.jpeg'
import oldpic7 from './../projectsPics/oldpics/old7.jpeg'
import oldpic8 from './../projectsPics/oldpics/old8.jpeg'
import oldpic9 from './../projectsPics/oldpics/old9.jpeg'
import oldpic10 from './../projectsPics/oldpics/old10.jpeg'

import oldpic11 from './../projectsPics/oldpics/old11.jpeg'
import oldpic12 from './../projectsPics/oldpics/old12.jpeg'
import oldpic13 from './../projectsPics/oldpics/old13.jpeg'
import oldpic14 from './../projectsPics/oldpics/old14.jpeg'
import oldpic15 from './../projectsPics/oldpics/old15.jpeg'
import oldpic16 from './../projectsPics/oldpics/old16.jpeg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Layout from './layout/Layout'

export const OldProject = () => {
    const [opendiv, setOpendiv] = useState(false);
    const [imageNumber, setImageNumber] = useState(0);

    const images = [
        {
            src: pic11
        },
        {
            src: pic12
        },
        {
            src: oldpic1
        },
        {
            src: oldpic2
        },
        {
            src: oldpic3
        },
        {
            src: oldpic4
        },
        {
            src: oldpic5
        },
        {
            src: oldpic6
        },
        {
            src: oldpic7
        },
        {
            src: oldpic8
        },
        {
            src: oldpic9
        },
        {
            src: oldpic10
        },
        {
            src: oldpic11
        },
        {
            src: oldpic12
        },
        {
            src: oldpic13
        },
        {
            src: oldpic14
        },
        {
            src: oldpic15
        },
        {
            src: oldpic16
        },
    ]

    const handleclick = (i) => {
        setImageNumber(i);
        setOpendiv(true);
    }

    const handledir = (direction) => {
        let newIndex;
        if (direction === "l") {
            newIndex = imageNumber === 0 ? images.length - 1 : imageNumber - 1;
        } else {
            newIndex = imageNumber === images.length - 1 ? 0 : imageNumber + 1;
        }
        setImageNumber(newIndex);
    }

    return (
        <Layout>
            <div className='bg-[#001659] sm:h-[400px] h-[200px]'>
                <div className='text-[white] text-[40px] pt-[50px] '>
                    <h1 className='text-center'>Completed Projects .</h1>
                </div>
            </div>
            {
                opendiv
                &&
                <div className='sliderOld'>
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpendiv(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handledir("l")} />
                    <div className='sm:w-full bg-[white] p-2 w-[90%] m-auto'>
                        <img src={images[imageNumber].src} className='sm:h-full sm:w-full object-contain h-[250px]' />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handledir("r")} />
                </div>
            }
            <div className='flex flex-wrap gap-[20px] items-center justify-center mt-[20px]'>
                {images.map((pic, i) => <div key={i} className='w-[400px] h-[400px]'>
                    <img className='h-full w-full object-cover' src={pic.src} onClick={() => handleclick(i)} />
                </div>)}
            </div>

        </Layout>
    )
}
