import React from 'react'

const EmblemBadge = ({ link, title, desc, color }) => {

    const handleDownload = () => {
        // let a = document.createElement("a");
        // a.href = link;
        // a.download = title;
        // a.click();
        window.open("C:\Users\fgrre\Desktop\hackathon\frontend\public\ipc.pdf", '_blank');
    }
    return (
        <>
            <div className="lawBadges" onClick={handleDownload}>
                <h5>{title}</h5>
                <p>{desc}</p>
                <img src="images/emblem.png" alt="" />
                <div className="ribbon"></div>
                <div className="emblem"></div>
                <div style={{ background: color }} className="colorBadge"></div>
            </div>
        </>
    )
}

export default EmblemBadge
