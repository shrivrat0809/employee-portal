import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dictionary = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState("");

  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <>
      <input type="text" placeholder="enter the word" onChange={handleChange} />
      <button
        onClick={() => {
          navigate(`/definition/` + word, {replace: true});
        }}
      >
        search
      </button>
    </>
  );
};

export default Dictionary;
