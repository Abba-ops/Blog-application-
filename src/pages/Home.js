import useFetch from '../custom hook/useFetch';

import BlogList from '../components/BlogList';

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div className='loader'></div>}
            {blogs && <BlogList blogs={ blogs } title='All Blogs' />}   
        </div>
    );
}

export default Home;