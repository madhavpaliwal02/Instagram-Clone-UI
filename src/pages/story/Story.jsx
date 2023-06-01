import React from 'react'
import StoryViewer from '../../components/storyComponents/StoryViewer'



const Story = () => {

    const story = [
        {
            image: "https://images.pexels.com/photos/17035440/pexels-photo-17035440/free-photo-of-love-photographer-autumn-portrait.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, {
            image: "https://images.pexels.com/photos/15193665/pexels-photo-15193665/free-photo-of-cubes-and-wooden-boxes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, {
            image: "https://images.pexels.com/photos/16945534/pexels-photo-16945534/free-photo-of-horse-mom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, {
            image: "https://images.pexels.com/photos/16869356/pexels-photo-16869356/free-photo-of-man-in-a-suit-holding-his-face-in-his-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, {
            image: "https://images.pexels.com/photos/17056741/pexels-photo-17056741/free-photo-of-people-train-vehicle-vintage.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]

    return (
        <div>
            <StoryViewer stories={story} />
        </div>
    )
}

export default Story