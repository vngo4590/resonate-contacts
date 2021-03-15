import User from "./User";

/*
    This component takes care of loading all the users
*/
const Users = ({users}) => {
    return (
        <div className="row mx-auto">
          {
            users.map((user) => (
                <User user={user.item}/>
            ))
          }
        </div>
    )
}

export default Users
