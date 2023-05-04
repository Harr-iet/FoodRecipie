import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recipe from "./pages/recipe"
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {

  return (
    <div>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Index />}  />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="recipe" element={<Recipe />} /> 
    </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
