import { CommentsContextProvider } from "./context/CommentsContext";
import { Video } from "./components/Video";
import { Layout } from "./components/Layout";
import { Comments } from "./components/Comments";
// import videoExample from './assets/videos/Big_Buck_Bunny_240_10s_10MB.mp4'


function App() {
  return (
    <Layout>
        <CommentsContextProvider>
            <Video  /*source={videoExample}*/ poster="https://picsum.photos/900" />
            <Comments />
            <Comments />
            <Comments />
        </CommentsContextProvider>
    </Layout>
  );
}

export default App;
