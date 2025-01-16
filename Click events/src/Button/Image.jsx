import CopilotImage from 'E:/Web development/frontend/React/CLICK EVENTS/public/Copilot.png';


function Image() {
     
    const handleClick = (e) => e.target.style.display = 'none';
  
    return (
        // <img src={CopilotImage} alt="Copilot" />
        <img onClick={(e) => handleClick(e)} src={CopilotImage}></img>
    );
}

export default Image;