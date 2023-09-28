export default function UserCards({ user }) {
  const { avatar_url, html_url, type, login } = user;

  return (
    <>
      <div>
        <img src={avatar_url} alt="Profile Image" width={50} height={50} />
        <div className="details">
          <h2>{login}</h2>
          <p>
            Username:{" "}
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {login}
            </a>
          </p>
          <p>Type: {type}</p>
        </div>
      </div>
    </>
  );
}
