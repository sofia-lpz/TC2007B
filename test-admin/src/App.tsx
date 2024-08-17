import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

import { UserList } from "./users";
import { PostEdit, PostList, PostCreate } from "./posts";
import { TodoList, TodoEdit, TodoShow, TodoCreate } from "./todos";
import { CommentList, CommentEdit, CommentShow } from "./comments";
import { AlbumList, AlbumEdit, AlbumShow, AlbumCreate } from "./albums";
import { PhotoList, PhotoEdit, PhotoShow, PhotoCreate} from "./photos";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={EditGuesser} show={ShowGuesser}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>

    <Resource name="todos" list={TodoList} edit={TodoEdit} show={TodoShow} create={TodoCreate}/>

    <Resource name="comments" list={CommentList} edit={CommentEdit} show={CommentShow}/>
    <Resource name="albums" list={AlbumList} edit={AlbumEdit} show={AlbumShow} create={AlbumCreate}/>

    <Resource name="photos" list={PhotoList} edit={PhotoEdit} show={PhotoShow} create={PhotoCreate}/>
  </Admin>
);
