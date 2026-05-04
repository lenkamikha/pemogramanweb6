import UserList from "./components/UserList";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Daftar Pengguna</h2>
      <UserList />

      <h2>Daftar Post (5 Terbaru)</h2>
      <PostList />
    </div>
  );
}

export default App;
