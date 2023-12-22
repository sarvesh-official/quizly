export default function Result({ score, reset }) {
  const totalScore = 5;
  return (
    <div className="resutlDiv">
      <h1 className="resultHeading">Result</h1>
      <div className="emojiDiv">
        <h2>{score > 2 ? "🤩" : "😔"}</h2>
      </div>
      <h5 className="score">
        {score} OUT OF {totalScore} - ({(score / totalScore) * 100}) %
      </h5>
      <button className="restart" onClick={reset}>
        RESTART
      </button>
    </div>
  );
}
