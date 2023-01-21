import { Video } from "./components/Video";
import { Layout } from "./components/Layout";
import { Comments } from "./components/Comments";
import videoExample from './assets/videos/Big_Buck_Bunny_240_10s_10MB.mp4'


function App() {
  return (
    <Layout>
      <Video  source={videoExample} poster="https://picsum.photos/900" />
      <Comments />
      <Comments />
      <Comments />
    </Layout>
  );
}

export default App;
