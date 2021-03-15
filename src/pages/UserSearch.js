import React from 'react'
import {useState} from 'react'
// import Users from './Users';
// Import fuse.js for fuzzy search, which predicts 
// what we want
import Fuse from 'fuse.js'
import Users from '../components/Users';


const UserSearch = ({users}) => {
    // set up state for search query
    const [query, setQuery] = useState('');
    /**
     * Utilizing fuse.js for our search engine
     *  It is worth noting that, while we do have the ability to search for everything,
     *  it does not mean we should allow the user private details (eg: address & phone) to be search able 
     */
    // the keys we want to focus on our search engine
    const optionFuseSearch = {
        includeScore: true,
        useExtendedSearch: true,
        keys: [
            'id', 'name', 'username'
            /*
            {
            name: 'name',
            weight: 0.3
            },
            {
            name: 'username',
            weight: 0.2
            },
            
            {
            name: 'email',
            weight: 0.3
            },
            'website',
            'phone',
            {
            name: 'company.name',
            weight: 0.4
            }*/
        ]
    }
    const fuse = new Fuse(users, optionFuseSearch);

    // Define function for search query
    // Everytime the query runs, this function will update everything
    const queryChangeSearch = ({target={}}) => {
        const {value} = target;
        setQuery(value);
    }
    // Now we need to instantitate the search result
    const result = fuse.search(query);
    console.log(result);
    return (
        <>
            <h1 className="display-1">Contact</h1>
            <div className="my-5">
                <input className="form-control form-control-lg" value={query} onChange={queryChangeSearch} type="text" placeholder="Search user here ..." aria-label=".form-control-lg example"></input>
            </div>
            <Users users={result}/>
        </>
    )
}

export default UserSearch
