export function UserList({ users, deleteUser }) {
  return (
    <ul>
      {users.map(({ id, name, email, hasJob, avatar }) => {
        return (
          <li key={id}>
            <p>name: {name}</p>
            <p>email: {email} </p>
            <p>has job: {`${hasJob}`}</p>
            {/* або так:
            <p>has job: {hasJob.toString()}}</p> */}
            <button
              type="button"
              onClick={() => {
                deleteUser(id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
