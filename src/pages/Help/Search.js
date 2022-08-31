import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChangeHandler = (event) => {
    const { value } = event.target;

    setSearchKeyword(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <p>무엇을 도와드릴까요?</p>
      <form onSubmit={onSubmitHandler}>
        <input
          type="search"
          placeholder="검색"
          name="q"
          onChange={onChangeHandler}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  background: #4135bb;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 90px;
  margin-bottom: 40px;

  p {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    width: 560px;
    padding: 0 30px;

    input {
      width: 87%;
      box-shadow: none;
      border: none;
      background-color: #f7f9fc;
      color: #2f374d;
      border-radius: 2px;
      height: 50px;
      font-size: 1.125rem;
      line-height: 1.6;
      padding: 10px 20px;
    }

    button {
      width: 13%;
      color: #fff;
      background: #6361e9;
      border-radius: 2px;
      padding: 0 20px;
      height: 50px;
      line-height: 50px;
      margin-left: 10px;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
