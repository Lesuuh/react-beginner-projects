// import UserCards from "./UserCards";

export default function Users({ avatar, url, username, type, score }) {
  return (
    <>
      <div className="users">
        <div className="profile">
          <img src={avatar} alt="images" width="50" height="50" />
          <p>
            <p>
              Username:{" "}
              <span className="username">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {username}
                </a>
              </span>
            </p>
          </p>
        </div>

        <p>Type: {type}</p>
        <p>score: {score}</p>
      </div>
    </>
  );
}
