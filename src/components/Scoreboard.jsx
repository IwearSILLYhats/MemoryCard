function Scoreboard ({current, best}) {
    return (
        <div className="scoreboard">
            <p>{`Current Score: ${current}`}</p>
            <p>{`Best Score: ${best}`}</p>
        </div>
    )
}

export { Scoreboard }