import React from 'react'
import { CommentsContextProvider } from "../../context/CommentsContext";
import { Video } from "../../components/Video";
import { Comments } from "../../components/Comments";
import videoExample from '../../assets/videos/Big_Buck_Bunny_240_10s_10MB.mp4'
import { Layout } from '../../components/Layout';

export const Home = () => {
  return (
    <Layout>
        <CommentsContextProvider>
            <Video  source={videoExample} poster="https://picsum.photos/900" />
            <Comments />
        </CommentsContextProvider>
    </Layout>
  )
}
