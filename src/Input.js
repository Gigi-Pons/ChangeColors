const Input = ({ 
    firstColor, setFirstColor, 
    isDarkText, setIsDarkText,
    secondColor, setSecondColor
    
}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>First Color Name: </label>
            <input
                autoFocus
                type="text"
                placeholder="First color name"
                required 
                value={firstColor}
                onChange={(e) => {
                    setFirstColor(e.target.value)
                }}
                />

            <label>Second Color Name: </label>
            <input
                autoFocus
                type="text"
                placeholder="Second color name"
                required 
                value={secondColor}
                onChange={(e) => {
                    setSecondColor(e.target.value)
                }}
                />

                <button
                    type="button"
                    onClick={() => setIsDarkText(!isDarkText)}
                >
                    Change Text Color
                </button>
        </form>
    )
}

export default Input