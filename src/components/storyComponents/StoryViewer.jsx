import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'

const StoryViewerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background-color:black;
`

const StoryImage = styled.img`
    max-height:90vh;
    object-fit:contain;
`

const StoryViewer = ({ stories }) => {

    // Use state
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle Story viewer
    const handleStoryViewer = () => {
        if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
            setActiveIndex(activeIndex + 1);
        }
        else if (currentStoryIndex === stories.length - 1) {
            setCurrentStoryIndex(0);
            setActiveIndex(0);
        }
    }

    // useEffect
    useEffect(() => {
        const interval = setInterval(() => { handleStoryViewer() }, 2000)
        return () => clearInterval(interval); 
    });


    return (
        <div className='relative w-full'>
            <StoryViewerContainer>
                <StoryImage className='mt-8' src={stories?.[currentStoryIndex].image} />

                <div className='absolute top-0 flex w-full'>
                    {
                        stories.map((item, index) => <ProgressBar key={index} duration={2000} activeIndex={activeIndex} index={index} />)
                    }
                </div>
            </StoryViewerContainer>
        </div>
    )
}

export default StoryViewer