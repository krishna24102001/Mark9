
import './App.css';
import { useState } from 'react';
const places = {
  maharashtra:
    [
      { name: "Ajanta and Ellora caves", rating: "5" },
      { name: "Mahabaleshwar", rating: "4.4" },
      { name: "Bhandardara", rating: "4.9" }
    ],

  Gujarat: [
    { name: "Statue of Unity ", rating: "3" },
    { name: "Sabarmati Ashram", rating: "5" },
    { name: "Ajwa Nimeta Garden", rating: "3" },
  ],

  kerala: [
    { name: "Munnar", rating: "4" },
    { name: "Thekkady", rating: "4.6" },
    { name: "Poovar", rating: "4.9" }
  ]

}
function App() {
  const [state ,setState] = useState("maharashtra")
  const states =Object.keys(places);
  return (
    <div className="App">
      <h1>Explore India ❤️</h1>
      <div style={{
            display:"flex"
          }}>
           
      {
        states.map(s=>{
          return <button
            style={{
              cursor: "pointer",
              background: s===state ? "#c4cfe6":"#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            onClick={()=> setState(s)}
            key={s}
            >{s}</button>
       
        })
      }
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {places[state].map((p) => (
            <li
              key={p.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {p.name} </div>
              <div style={{ fontSize: "smaller" }}> {p.rating}/5 </div>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/ajinkya-jadhav-760997196/" target="_blank">Linked in</a>
            </li>
            <li>
                <a href="https://twitter.com/AjinkyaDineshJ1" target="_blank">Twitter</a>
            </li>
            <li>
                <a href="https://github.com/ajinkya6373" target="_blank">GitHub</a>
            </li>
            <li>
                <a href="https://ajinkya-portfolio.netlify.app/" target="_blank">Portfolio</a>
            </li>
        </ul>
       
    </footer>


    </div>
  );
}

export default App;
