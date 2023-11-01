const Circle = ({ firstColor, secondColor, isDarkText }) => {
    return (
        <section
            className="circle"
            style={{ 
                background: `linear-gradient(${firstColor}, ${secondColor})`,
                color: isDarkText ? "#000" : "#FFF" 
            }}
        >
            <div className="text-container">
                <p>From {firstColor ? firstColor : "No Color"}</p>
                <p>To {secondColor ? secondColor : "No Color"}</p>
            </div>
        </section>
    )
}

export default Circle