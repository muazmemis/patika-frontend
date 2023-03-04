import PropTypes from "prop-types";

function User(p) {
  console.log(p);
  const { name, surname, age, isLogin, friends } = p;
  return (
    <div>
      {/* {p.isLogin ? `User ${p.name} ${p.surname} ${p.age}` : "not login"} */}
      {/* {isLogin ? `User ${name} ${surname} ${age}` : "not login"} */}
      {/* {friends.map((friend, i) => (
        // <div key={i}>{friend} </div>
        <div key={friend.id}>{friend.name} </div>
      ))} */}
      {friends && friends.map((friend, i) => {
        const name = friend.name;
        return <div key={friend.id}>{name} </div>;
      })}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isLogin: PropTypes.bool.isRequired,
  friends: PropTypes.array,
};

export default User;
