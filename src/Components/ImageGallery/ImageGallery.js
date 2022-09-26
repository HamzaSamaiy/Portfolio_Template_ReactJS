import React from 'react';
import Gallery from 'react-image-gallery';
import ReactImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";
import './Style.css';

const ImageGallery =(props)=>{
    const imageList=props.images && props.images.map((image)=>{
        return {
            original:image,
            thumbnail:image,
        };
    })


    return (
        <div>
            <Gallery items={imageList} showBullets showThumbnails/>
        </div>
    )
};

export default ImageGallery;