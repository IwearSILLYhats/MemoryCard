function Card ({children, onClick}) {
    return (
        <div className="card" onClick={(h) => onClick(false)}>
            {children}
        </div>
    )
}

export { Card }