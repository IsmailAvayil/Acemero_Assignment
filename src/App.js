import AppcontextProvider from "./AppContext/Appconext";
import RegisterForm from "./Components/RegisterForm";
import BookDataDetails from "./Components/BookDataDetails";
import Sorting from "./Components/Sorting";
import FilterByPublishedYear from "./Components/FilterByPublishedYear";

function App() {
  return (
    <AppcontextProvider>
      <div className="App">
        <RegisterForm />
        <BookDataDetails />
        <FilterByPublishedYear/>
        <Sorting/>
        
      </div>
    </AppcontextProvider>
  );
}

export default App;
