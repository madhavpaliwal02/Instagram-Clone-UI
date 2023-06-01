import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, Button } from "@chakra-ui/react"
import { FaPhotoVideo } from 'react-icons/fa'
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import './CreatePostModal.css'
import photo from '../../images/Pal.jpg'

const CreatePostModal = ({ onClose, isOpen }) => {

    // Use State
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState();
    const [caption, setCaption] = useState();

    // Handle File
    const handleOnChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file);
        }
        else {
            setFile(null);
            alert("Please select an image or a video...")
        }
    }

    // Handle Drop
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("videos/")) {
            setFile(droppedFile);
        }
    }

    // DragOver : True
    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    }
    // DragOver : False
    const handleDragLeave = () => {
        setIsDragOver(false);
    }

    // Handle Caption Change
    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    }

    return (
        <div>
            <div>
                {/* Create Post Modal */}
                <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />

                    {/* Modal Content */}
                    <ModalContent>

                        {/* Header & Share */}
                        <div className='flex justify-between py-1 px-10'>
                            <p>Add New Post</p>
                            <Button variant={"ghost"} size={"sm"} colorScheme={"blue"} >
                                Share</Button>
                        </div>
                        <hr />

                        {/* Modal Body */}
                        <ModalBody>
                            <div className='h-[70vh] justify-center pb-5 flex'>
                                {/* Left : Drag & Drop Box */}
                                <div className='w-[50%]'>
                                    {!file && <div
                                        onDrop={handleDrop} onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        className='drag-drop h-full'
                                    >
                                        <div>
                                            <FaPhotoVideo className='text-4xl' />
                                            <p>Drag photos or videos here</p>
                                        </div>

                                        <label htmlFor="file-upload" className='custom-file-upload'>Select file from Computer</label>
                                        <input className='fileInput' type="file" accept='image/*, video/*' id="file-upload" onChange={handleOnChange} />
                                    </div>}

                                    {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt="" />}
                                </div>

                                {/*  */}
                                <div className='w-[1px] border h-full'></div>

                                {/* Right : Top User Profile Details */}
                                <div className='w-[50%]'>
                                    <div className='flex items-center px-2'>
                                        <img className='w-7 h-7 rounded-full' src={photo} alt="" />
                                        <p className='font-semibold ml-4'>Palak Porwal</p>
                                    </div>

                                    {/* Post : Caption */}
                                    <div className='px-2'>
                                        <textarea placeholder='Write a caption' className='captionInput' name="caption" rows="6" onChange={handleCaptionChange}></textarea>
                                    </div>

                                    {/* Caption Bottom emoji + word count */}
                                    <div className='flex justify-between px-2'>
                                        <GrEmoji />
                                        <p className='opacity-70'>{caption?.length} /2,200</p>
                                    </div>
                                    <hr />

                                    {/* Location */}
                                    <div className='p-2 flex justify-between items-center'>
                                        <input className='locationInput' type="text" name='location' placeholder='location' />
                                        <GoLocation />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}

export default CreatePostModal