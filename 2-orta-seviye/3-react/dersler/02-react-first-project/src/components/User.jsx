function User(p) {
  console.log(p);
  const { name, surname, age, isLogin } = p;
  return (
    <div>
      {/* {p.isLogin ? `User ${p.name} ${p.surname} ${p.age}` : "not login"} */}
      {isLogin ? `User ${name} ${surname} ${age}` : "not login"}
    </div>
  );
}

export default User;
