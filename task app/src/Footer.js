const Footer = ({length}) =>{//<p>copyright &copy; {today.getFullYear()}</p>
    const today= new Date();
    return (
        <footer>
            <p>{length} list items</p>
            
        </footer>
    )
}
export default Footer