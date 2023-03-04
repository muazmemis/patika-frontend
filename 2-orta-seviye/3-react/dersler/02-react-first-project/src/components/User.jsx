import PropTypes from "prop-types";

function User(p) {
  console.log(p);
  const { name, surname, age, isLogin, friends, address } = p;

  if (!isLogin) return <div>Not login</div>;

  return (
    <div>
      {/* {p.isLogin ? `User ${p.name} ${p.surname} ${p.age}` : "not login"} */}
      <h1>{isLogin ? `User ${name} ${surname} ${age}` : "not login"}</h1>
      <h1>
        {address.title} - {address.zip}
      </h1>
      {/* {friends.map((friend, i) => (
        // <div key={i}>{friend} </div>
        <div key={friend.id}>{friend.name} </div>
      ))} */}
      {friends &&
        friends.map((friend, i) => {
          const name = friend.name;
          return <div key={friend.id}>{name} </div>;
        })}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  //   age: PropTypes.number.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isLogin: PropTypes.bool.isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
  name: "not name",
  isLogin: false,
};

export default User;
