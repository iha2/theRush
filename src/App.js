import React, { Component, useState } from "react";
import { data } from "./data";
import {
  PaginationStyle,
  SearchBarStyle,
  PlayerRowStyle,
  PlayerSearcher,
  PlayerSearchContainer,
  PlayerContainerStyle,
  PlayerCell,
  HeaderContainer,
  Header,
  PreviousPageButtonStyle,
  NextPageButtonStyle,
  DownloadButton
} from "./App.styles";

const Pagination = ({ page, nextPage, prevPage }) => {
  return (
    <PaginationStyle>
      <PreviousPageButtonStyle onClick={() => prevPage(page)} />
      {page}
      <NextPageButtonStyle onClick={() => nextPage(page)} />
    </PaginationStyle>
  );
};

const Headers = ({ headers }) => (
  <HeaderContainer>
    {headers.map((header, index) =>
      index ? (
        <Header key={index}>{header}</Header>
      ) : (
        <Header key={index} style={{ width: "7rem" }}>
          {header}
        </Header>
      )
    )}
  </HeaderContainer>
);
const SearchBar = ({ onChange }) => <SearchBarStyle onChange={onChange} />;
const PlayerRow = ({ children }) => <PlayerRowStyle>{children}</PlayerRowStyle>;

const PAGE_SIZE = 20;

const goToPage = (setPage, totalPages, page) => {
  if (page >= 0 && page <= totalPages - 1) {
    setPage(page);
  }
};
const nextPage = (setPage, totalPages) => page => {
  goToPage(setPage, totalPages, page + 1);
};

const previousPage = (setPage, totalPages) => page => {
  goToPage(setPage, totalPages, page - 1);
};

const contructFileLine = headers => {
  return `${headers.reduce((headerList, header, index) => {
    switch (index) {
      case 0:
        return header;
      case headers.length:
        return `${headerList},${header}\r`;
      default:
        return `${headerList},${header}`;
    }
  }, "")}`;
};

const constructFile = players =>
  players.reduce(
    (file, player) => `${file}\n${contructFileLine(Object.values(player))}`,
    `${contructFileLine(Object.keys(data[0]))}`
  );

const PlayerSearcherModule = () => {
  const totalPages = data.length / PAGE_SIZE;
  const [players, updatePlayers] = useState(data);
  const [page, setPage] = useState(0);

  return (
    <PlayerSearcher>
      <a
        href={`data:text/plain,${constructFile(players)}`}
        style={{
          textDecoration: "none"
        }}
        download="filteredPlayers.csv"
      >
        <DownloadButton>Download</DownloadButton>
      </a>
      <SearchBar
        onChange={e =>
          updatePlayers(
            data.filter(
              player =>
                player.Player.match(new RegExp(e.target.value, "gi")) ||
                String(player.Lng).match(new RegExp(e.target.value, "gi")) ||
                String(player.Yds).match(new RegExp(e.target.value, "gi"))
            )
          )
        }
      />
      <PlayerSearchContainer>
        <Headers headers={Object.keys(data[0])} />
        <PlayerContainerStyle>
          {players.slice(page, page + PAGE_SIZE).map((player, playerIndex) => (
            <PlayerRow key={playerIndex}>
              {Object.values(player).map((playerValue, index) => {
                return index ? (
                  <PlayerCell key={index}>{playerValue}</PlayerCell>
                ) : (
                  <PlayerCell style={{ width: "7rem" }} key={index}>
                    {playerValue}
                  </PlayerCell>
                );
              })}
            </PlayerRow>
          ))}
        </PlayerContainerStyle>
      </PlayerSearchContainer>
      <Pagination
        page={page}
        nextPage={nextPage(setPage, totalPages)}
        prevPage={previousPage(setPage, totalPages)}
      />
    </PlayerSearcher>
  );
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerSearcherModule />
      </div>
    );
  }
}

export default App;
