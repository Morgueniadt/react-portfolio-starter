import { Link } from "react-router-dom";

const albums = [
  { id: 1, title: "Album 1" },
  { id: 2, title: "Album 2" },
  { id: 3, title: "Album 3" },
  { id: 4, title: "Album 4" },
  { id: 5, title: "Album 5" },
];

export default function AlbumsIndex() {
  return (
    <>
      <h1>All Albums</h1>
      {albums.map(album => (
        <p key={album.id}>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </p>
      ))}
    </>
  );
}
