import { useState, useRef} from "react";
import './App.css'

// will use this function to generate the password
const passwordGenerator = () => {
};

// this is for copy functionality
const copyThePassword = () => {}

function App(){
  const [includeUppercase, setIncludeUppercase] = useState <boolean>(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState <boolean> (false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean> (false);
  const [passwordLengh, setPasswordLength] = useState <number>(15);
  const [password, setPassword] = useState<string>(' ');
  const successBox = useRef<HTMLDivElement>(null);


  return (
    <>
    <div className="pw-generator">
      <form onSubmit={passwordGenerator}>
        <h1>
           Password Generator 
        </h1>
      <div className="options">
        <label htmlFor="include-uppercase">
          Include Uppercase Letters:
          <input type="checkbox"
          id="include-uppercase" 
          name="include-uppercase"
          checked={includeUppercase}
          onChange={()=> setIncludeUppercase(!includeUppercase)}
          />
          </label>
          <label htmlFor="include-uppercase">
              Include Special Characters:
              <input 
              type="checkbox"
              id="include-speacial-chars" 
              name="include-special-chars"
              checked={includeSpecialChars}
              onChange={()=> setIncludeSpecialChars(!includeSpecialChars)}
              />
          </label>
          <label htmlFor="include-Numbers">
              Include Numbers:
              <input 
              type="checkbox"
              id="include-Numbers" 
              name="include-Numbers"
              checked={includeNumbers}
              onChange={()=> setIncludeNumbers(!includeNumbers)}
              />
          </label>
          <label >
              Password Length:
              <input 
              type="range"
              id="pw-range" 
              name="pw-range"
              min = "5"
              max= "25"
              value={passwordLengh}
              onChange={(e)=> setPasswordLength(parseInt(e.target.value))}
              />
              <p className="pw-length-output">{passwordLengh}</p>
              </label>
              </div>
              <div className="pw-output">{password}</div>

              <div className="options">
                <button className="btn" type="submit">Generate Password</button>
                <button className="btn" type="button" onClick={copyThePassword}>Copy Password</button>
              </div>
          
          

     
      <div className="success-message" ref ={successBox }>
        <p>Password Copied to Clipboard!</p>
      </div>
      </form>
    </div>
    
    </>
  )
}
export default App