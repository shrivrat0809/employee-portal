import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Definition = () => {
  const {search} = useParams();
  const [definitions, setDefinitions] = useState([]);
  const [word, setWord] = useState("");
  const navigate = useNavigate()

  function handleChange(e) {
    setWord(e.target.value);
  }

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((responce) => {
        if (responce.status === 404)
        navigate('/404')
      })
      .then((data) => setDefinitions(data[0].meanings));
  }, []);
  //definitions[0].definition
  return (
    <>
      <input type="text" placeholder="enter the word" onChange={handleChange} />
      <div>
        here is the definition:
        {definitions
          ? definitions.map((meaning) => (
              <p key={Math.random()}>{meaning.definitions[0].definition}</p>
            ))
          : null}
      </div>
    </>
  );
};

export default Definition;
