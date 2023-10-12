import React, { useState } from "react";

function RandomizeCharColors(props) {
    const initial = Array.prototype.map.call(props.children, char => char);
    const [chars, setChars] = useState(initial);
    const [colorInterval, setColorInterval] = useState(null);

    const colors = ['text-e6n-red', 'text-e6n-blue', 'text-e6n-green', 'text-e6n-yellow'];

    const onMouseEnter = () => {
      setColorInterval(setInterval(() => {
        const rands = getRandomIndices(props.children.length, 4);
        setChars(initial.map((char, index) => {
          const colorIndex = rands.indexOf(index);
          if (colorIndex !== -1) {
            return <span className={colors[colorIndex]} key={index}>{ char }</span>;
          }

          return char;
        }));
      }, 500));
    }

    const onMouseLeave = () => {
      clearInterval(colorInterval);
      setChars(initial);
    }

    const getRandomIndices = (max, num = 4) => {
      let numbers = [];

      while (numbers.length < num) {
        let r = Math.floor(Math.random() * max);

        if(numbers.indexOf(r) === -1 && r !== 11) {
          numbers.push(r);
        }
      }

      return numbers;
    }

    return (
      <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        { chars }
      </span>
    );
}

function SiteTitle() {
    return (
        <a href="/" className="flex items-center no-underline text-slate-400 light-mode:text-slate-800">
            <span className="text-xl tracking-tighter">
                <RandomizeCharColors>lukapeharda.com</RandomizeCharColors>
            </span>
        </a>
    );
}

export default SiteTitle;