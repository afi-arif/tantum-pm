import React, { useEffect, useState } from "react";
import video from "./../../images/deane-property-management.mp4";
import './splash-component.scss';

export const TantumSplash = () => {
    const [isVideo, setVideo] = useState<boolean>(true);
    const splashVideo = React.createRef<HTMLVideoElement>();
    useEffect(() => {

        const isHomepage = window.location.pathname;
        if(isHomepage !== "/"){
            document.body.classList.add('splash-on');
            setVideo(false);
            return;
        }
        
    }, [setVideo]);

    const skipVideo = (event:React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault();
        setVideo(false);
    }

    if(!isVideo){
        return null;
    }



    return(
        <div className="tantum-splash-wrapper">
            <div className="splash-video">
                <div className="header">close</div>
                <div className="body">
                    <video ref={splashVideo} muted  autoPlay={true} preload="auto" controls width={'95%'}>
                        <source  src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="footer">
                    <button onClick={e => skipVideo(e)}>SKIP VIDEO &gt;&gt;</button>
                </div>
            </div>
        </div>
    )
}