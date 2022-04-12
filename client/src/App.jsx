// HOC 
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Library HOC
import LibraryHomeLayoutHOC from "./HOC/Library/Home.Library.Hoc";
import NewspaperLayoutHOC from "./HOC/Library/Newspaper.Library.Hoc";
import LibraryTeacherLayoutHOC from "./HOC/Library/Teachers.Library.Hoc";
import LibraryQuestionpaperLayoutHOC from "./HOC/Library/Questionpaper.Library.Hoc";

// Forum HOC
import ForumHomeLayoutHOC from "./HOC/Forum/Home.Forum.Hoc";
import ForumQuestionLayoutHOC from "./HOC/Forum/Question.Forum.Hoc";

// Components
import Temp from "./components/Temp";

// Pages
import HomePage from "./Pages/Home";

// Library Pages
import LibraryHome from "./Pages/Library/LibraryHome";
import Newspaper from "./Pages/Library/Newspaper";
import Teachers from "./Pages/Library/TeachersPage";
import Questionpaper from "./Pages/Library/Questionpaper";

// Forum Page
import ForumHome from "./Pages/Forum/ForumHome";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={HomePage} />

      {/* Library routes */}
      <LibraryHomeLayoutHOC path="/library" exact component={LibraryHome} />
      <NewspaperLayoutHOC path="/library/newspaper" exact component={Newspaper} />
      <LibraryTeacherLayoutHOC path="/library/teacher" exact component={Teachers} />
      <LibraryQuestionpaperLayoutHOC path="/library/teacher/questionpaper" exact component={Questionpaper} />

      {/* Forum routes */}
      <ForumHomeLayoutHOC path="/forum" exact component={ForumHome} />
      <ForumQuestionLayoutHOC path="/forum/:id" exact component={Temp} />
    </>
  );
}

export default App;