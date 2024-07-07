import Release from "./components/Release";  
import './styles.css'

const App = () => {
  
  return (
    <div className="">
      <header className="bg-gradiante text-white md:p-10 p-5 w-[100%]">
        <h1 className="text-[50px] font-bold">
          Release Notes
        </h1>
      </header>  
        <Release/> 
    </div>
  );
}

export default App;
