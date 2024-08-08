import { useCallback, useState } from "react";
import "../css/components/app.css";
function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharacterAllowed, setIsSpecialCharacterAllowed] =
    useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let passwordPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isSpecialCharacterAllowed) {
      passwordPool += "!@#$%^&*()";
    }
    if (isNumberAllowed) {
      passwordPool += "1234567890";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * passwordPool.length + 1);

      pass += passwordPool.charAt(char);
    }

    setPassword(pass);
  }, [length, isSpecialCharacterAllowed, isNumberAllowed, setPassword]);

  return (
    <>
      <div className="main-wrapper">
        <div className="content-wrapper">
          <div className="navigation">
            <h1>Password Generator</h1>
          </div>{" "}
          <div className="input-section">
            <div className="input-wrapper">
              <input
                type="text"
                value={password}
                placeholder="password"
                readOnly
              />
            </div>
            <button className="button-copy">Copy</button>
          </div>
          <div className="output-wrapper">
            <div className="range">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                onChange={(event) => {
                  setLength(event.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>

            <div className="entry">
              <input
                type="checkbox"
                onChange={() => {
                  setIsNumberAllowed((prev) => {
                    !prev;
                  });
                }}
                defaultChecked={isNumberAllowed}
              />

              <label htmlFor="">Number</label>
            </div>

            <div className="entry">
              <input
                type="checkbox"
                onChange={() => {
                  setIsSpecialCharacterAllowed((prev) => {
                    !prev;
                  });
                }}
                defaultChecked={isSpecialCharacterAllowed}
              />

              <label htmlFor="">Special Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
