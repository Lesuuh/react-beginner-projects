export default function Form({ onChange, onSubmit, value }) {
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type in the Github Username"
          required
          onChange={onChange}
          value={value}
        />
        <button>Search</button>
      </form>
    </>
  );
}
