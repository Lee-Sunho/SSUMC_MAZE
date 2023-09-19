import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { IPlayerPosition, setMaze } from "../redux/controlSlice";

const Maze = () => {
  const mazeType = useSelector<RootState, number>((state) => {
    return state.control.mazeType;
  });

  const backgroundStyle = {
    backgroundImage: `url('assets/maze${mazeType}.svg')`,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (mazeType != 0) {
      dispatch(setMaze(mazeType));
    }
  }, [mazeType]);

  useEffect(() => {
    console.log("rerender");
  }, []);

  const maze = useSelector<RootState, string[][]>((state) => {
    return state.control.maze;
  });

  const playerPostion = useSelector<RootState, IPlayerPosition>((state) => {
    return state.control.playerPostion;
  });

  return (
    <div style={backgroundStyle} className="mazeContainer">
      {maze.map((row, r_index) => {
        return row.map((cell, c_index) => {
          const key = `${r_index} ${c_index}`;
          const isPlayerHere =
            playerPostion.y === r_index && playerPostion.x === c_index;
          return (
            <div key={`${r_index} ${c_index}`} className="cell">
              {(() => {
                switch (key) {
                  case "5 5":
                    return (
                      <img
                        className="text_finish"
                        src="/assets/finish_text.svg"
                      />
                    );
                  case "0 0":
                    return (
                      <img
                        className="text_start"
                        src="/assets/start_text.svg"
                      />
                    );
                  case "0 1":
                    return (
                      <img
                        className="arrow_start"
                        src="/assets/ic_vector.svg"
                      />
                    );
                  case "5 4":
                    return (
                      <img
                        className="arrow_finish"
                        src="/assets/ic_vector.svg"
                      />
                    );
                  default:
                    return null;
                }
              })()}
              {isPlayerHere && (
                <img
                  className="img_char_maze"
                  src="/assets/img_char_maze.svg"
                />
              )}
            </div>
          );
        });
      })}
    </div>
  );
};

export default React.memo(Maze);
