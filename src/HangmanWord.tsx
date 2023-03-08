export function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t", "e"];
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: "0.1em solid black",
          }}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
