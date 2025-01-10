import ProfileCard from "./Components/ProfileCard"
import './App.css'
function App() {

  return (
      <div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Nishant"
				age="24"
				city="Jaipur, Raj"
				followers="128"
				likes="25K"
				photos="21"
			></ProfileCard>
		</div>
  )
}

export default App
