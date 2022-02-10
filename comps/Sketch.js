import { useEffect, useRef } from "react";
// import p5 from "p5";
import dynamic from "next/dynamic";
// const p5 = dynamic(() => import("p5").then((mod) => console.log(mod)), {
//   ssr: false,
// });

const Sketch = () => {
  const myRef = useRef(null);

  const s = (sketch) => {
    let x = 100;
    let y = 100;

    sketch.setup = () => {
      sketch.createCanvas(200, 200);
    };

    sketch.draw = () => {
      sketch.background(255);
      sketch.fill(255);
      sketch.rect(x, y, 50, 50);
    };
  };
  // console.log(myRef.current, p5);
  useEffect(() => {
    // const p5 = dynamic(() => import("p5").then((mod) => console.log(mod)), {
    //   ssr: false,
    // });
    // console.log(p5);
    const p5 = require("p5");
    const myp5 = new p5(s, myRef.current);
  }, []);

  return <div ref={myRef}></div>;
};

export default Sketch;
