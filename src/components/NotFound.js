import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Whoops!</h2>
            <div className="not-found-info">
                <p><span className="not-found-message">404</span> Page Not Found</p>
                <span>Try our </span>
                <Link className="link" to={'/'}>Home Page</Link>
                <span> or </span>
                <Link className="link" to={'/create'}>Create new Blog</Link>
            </div>
        </div>
    );
}

export default NotFound;