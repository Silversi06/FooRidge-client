import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; // Routes import 제거
import Signup from './Signup/Signup';
import SignupSignin from './Signinup/SignupSignin';
import Signin from './Signin/Signin';
import Location from './Location/location';
import Main from './Main/Main';
import Search from './Search/Search';
import Post from './Post/Post';
import PostScreen from './PostScreen/PostScreen';
import Mypage from './Mypage/Mypage';
import Statuspost from './Statuspost/Statuspost'; // Statuspost import 추가
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignupSignin />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/location' element={<Location/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/postscreen' element={<PostScreen/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/mypage' element={<Mypage/>}/>
      <Route path='/statuspost' element={<Statuspost/>}/>
      <Route path='/chat' element={<ChatPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
