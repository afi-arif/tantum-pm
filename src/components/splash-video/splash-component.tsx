import React, { useEffect, useState, useContext } from "react";
import video from "./../../images/deane-property-management.mp4";
import './splash-component.scss';

export const TantumSplash = ({isHome}:any) => {
    const [isVideo, setVideo] = useState<boolean>(true);
    useEffect(() => {
        if(isHome === "/" && isVideo){
            document.body.classList.add('splash-on');
            setVideo(true)
            return;
        }
        document.body.classList.remove('splash-on');
        setVideo(false);
    }, [isVideo]);

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
                    <video muted  autoPlay={true} preload="auto" controls width={'95%'}>
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

function splashContext(splashContext: any) {
    throw new Error("Function not implemented.");
}
