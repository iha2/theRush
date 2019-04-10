import styled from "styled-components";
import { default as MUIChevronLeft } from "@material-ui/icons/ChevronLeft";
import { default as MUIChevronRight } from "@material-ui/icons/ChevronRight";
import { default as MUIButton } from "@material-ui/core/Button";

export const PlayerRowStyle = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
  color: black;
  background-color: white;
  margin: 0;
  display: flex;
  &:first {
    width: 10%;
  }

  &:hover {
    background-color: #eeeeee;
  }
`;

export const PlayerContainerStyle = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const PlayerSearcher = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1b1b1b;
`;

export const SearchBarStyle = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

export const PlayerSearchContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: scroll;
`;

export const PlayerCell = styled.li`
  display: inline-block;
  padding: 1rem;
  width: 6.4%;
  text-align: left;
`;

export const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  color: white;
`;

export const HeaderContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 1rem 0;
`;

export const Header = styled.div`
  width 6.4%;
  padding: 0 1rem;
`;

export const PreviousPageButtonStyle = styled(MUIChevronLeft)``;
export const NextPageButtonStyle = styled(MUIChevronRight)``;
export const DownloadButton = styled(MUIButton)`
  && {
    background-color: white;

    :hover {
      background-color: grey;
    }
  }
`;
