import User from "./User";

/*
    This component takes care of loading all the users
*/
const Users = ({users}) => {
    return (
        <div className="row">
          {
            users.map((user) => (
                <User user={user} key={user.id}/>
            ))
          }
        </div>
    )
}

export default Users
