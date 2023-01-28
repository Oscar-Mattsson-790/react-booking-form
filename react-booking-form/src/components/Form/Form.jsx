import "./Form.css";

function Form() {
  const user = {
    class: "",
    tickets: "",
    title: "",
    firstName: "",
    lastName: "",
    terms: "",
  };

  function handleClick() {
    console.log(user);
  }

  return (
    <div className="form">
      <div className="class">
        <ul>
          <input
            type="radio"
            value="SecondClass"
            onChange={(event) => {
              user.class = event.target.value;
            }}
          />
          <label>2: klass</label>
        </ul>
        <ul>
          <input
            type="radio"
            value="FirstClass"
            onChange={(event) => {
              user.class = event.target.value;
            }}
          />
          <label>1: klass</label>
        </ul>
      </div>
      <div className="ticket-title">
        <label className="ticket-title-label">Antal biljetter</label>
        <label className="ticket-title-label">Titel</label>
      </div>
      <div className="select">
        <select
          name="numbers"
          id="numbers"
          onChange={(event) => {
            user.tickets = event.target.value;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <select
          name="title"
          id="title"
          onChange={(event) => {
            user.title = event.target.value;
          }}
        >
          <option value="Mrs">Mrs</option>
          <option value="Mr">Mr</option>
          <option value="Optional">Optional</option>
        </select>
      </div>
      <div className="input">
        <label className="name">Förnamn</label>
        <input
          className="input-name"
          type="text"
          placeholder="Förnamn"
          onChange={(event) => {
            user.firstName = event.target.value;
          }}
        />
        <label className="name">Efternamn</label>
        <input
          className="input-name"
          type="text"
          placeholder="Efternamn"
          onChange={(event) => {
            user.lastName = event.target.value;
          }}
        />
      </div>

      <div className="footer">
        <ul>
          <input
            type="checkbox"
            value="Confirmed"
            onChange={(event) => {
              user.terms = event.target.value;
            }}
          />
          <label className="label-terms">Godkänner villkoren</label>
        </ul>
      </div>
      <button className="btn" onClick={handleClick}>
        Boka biljetter
      </button>
    </div>
  );
}

export default Form;
