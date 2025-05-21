import { Link } from "react-router-dom";

function SideBar(){
    return(
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to={'/products'}>Get all products</Link>
                </li>
                <li>
                    <a href="#">Get all Cateogries</a>
                </li>
            </ul>
        </>
    );
}


export default SideBar;