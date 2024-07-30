import { useState, useRef} from "react";
import './App.css'



function App(){
  const [includeUppercase, setIncludeUppercase] = useState <boolean>(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState <boolean> (false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean> (false);
  const [passwordLengh, setPasswordLength] = useState <number>(15);
  const [password, setPassword] = useState<string>(' ');
  const successBox = useRef<HTMLDivElement>(null);

  // will use this function to generate the password
const passwordGenerator = (e:React.FormEvent<HTMLFormElement>):void => {
  e.preventDefault();
  const lowercase: string = 'abdcefghijklmnopqrstuvwxyzw'
  const uppercase: string = lowercase.toUpperCase();
  const numbers: string = '0123456789';
  const SpecialChars: string = '!@#$%^&*()_-+=|}]{[":><?,.~';

  const chars: string = lowercase + 
      (includeUppercase ? uppercase: '') +
      (includeNumbers ? numbers: '') +
      (includeSpecialChars ? SpecialChars: '')

  let pw: string = '' ;

  for(var i=0; i< passwordLengh; i++){
    pw += chars[Math.floor(Math.random() * chars.length)]
  }
  setPassword(pw)
};

// this is for copy functionality
const copyThePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if(password.length === 0) return ;
  navigator.clipboard.writeText(password);
  successBox.current?.classList.add('message-show');

  setTimeout(() => {
    successBox.current?.classList.remove('message-show');

  }, 3000)
  
};



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
              className="slider"
            
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