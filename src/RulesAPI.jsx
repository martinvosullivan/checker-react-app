import { useEffect, useState } from "react";

function RulesAPI() {
  const [rules, setRules] = useState("");

  useEffect(() => {
    fetch("https://samuelg900.github.io/adCheckers/rules.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success!");
        setRules(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>Game Rules</h3>
      <p>{rules[0]?.text}</p>
      <p>{rules[1]?.text}</p>
      <p>{rules[2]?.text}</p>
      <p>{rules[3]?.text}</p>
      <p>{rules[4]?.text}</p>
      <p>{rules[5]?.text}</p>
      <p>------------------------------------------------------------</p>
    </div>
  );
}

export default RulesAPI;
