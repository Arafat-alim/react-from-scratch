import React from "react";
import jokesApi from "../JokesAPI";
import Jokes from "./Jokes";

export default function ParentJokes() {
  const jokesElement = jokesApi.map((joke) => {
    return (
      <Jokes setup={joke.setup} punchLine={joke.punchline} key={joke.id} />
    );
  });
  return (
    <div>
      <h1>Parent Jokes</h1>
      {jokesElement}
    </div>
  );
}
