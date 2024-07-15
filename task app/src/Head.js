const Head = ({title}) => {
    return (
        <header>
            
            <h5>{title}</h5>
        </header>
    )
}
Head.defaultProps={
    title:"default title"
}
export default Head
