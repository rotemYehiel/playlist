import React from "react";
import { ListLayout, SongsList, Song } from "../styleComponents/List";

const List = ({ list }) => {
  return (
    <ListLayout>
      {list?.songs?.length ? (
        <SongsList>
          {list.songs.map((song, index) => {
            return (
              <Song key={index}>
                {song.name}
                {song.artist && ` - ${song.artist}`}
              </Song>
            );
          })}
        </SongsList>
      ) : (
        <h2>There are no songs in this list</h2>
      )}
    </ListLayout>
  );
};

export default List;
