import './index.scss';

const AnimatedLetters = ({ letterClass, str, idx }) => {
  let strArray = str.split(' ');
  let wordIdx = -1;
  let i = -1;
  return (
    <>
      {strArray.map(word => {
        wordIdx += 1;
        if (wordIdx < strArray.length-1) word = word+' ';
        return (
          <span key={word+wordIdx} className="text-animate-wrapper" aria-hidden="true">
            {word.split('').map(char => {
              i += 1
              return (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
};
export default AnimatedLetters;