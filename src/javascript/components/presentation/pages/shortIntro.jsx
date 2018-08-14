import React from "react";

export default function shortIntro() {

  const subject = <div className="short-intro-heading">
    An Independent and Honest Advice
  </div>;

  const content = <div className="short-intro-details">
    Young, skilled, and English-speaking individuals are looking into options to leave their countries,
    but there are too many traps and uncertainties. I have been there.
    <br/> <br/>
    Hiring an immigration attorney is another challenge. They often give you ambiguous and politically correct answers.
    Plus, they are incentivized to represent your case. They are not independent.
    <br/> <br/>
    Here’s where I come in. I have been there, and I know the struggle and uncertainties.
    Through my platform, I would like to share my experience. I hope you get there more easily.
  </div>;

  return <div className="short-intro-cover">
    <div className="short-intro-content">
      {subject}
      {content}
    </div>

  </div>
}