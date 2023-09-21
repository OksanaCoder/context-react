import React, { useState, useEffect } from "react";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";
// import styles from './UsersLoader.module.scss';

const UsersLoader = () => {
  const [state, setState] = useState({
    users: [],
    error: null,
    isFetching: false,
    currentPage: 1,
    currentResults: 5
  });

  const load = () => {
    setState({ ...state, isFetching: true });
    getUsers({ page: state.currentPage, results: state.currentResults })
      .then((data) => {
        // console.log(data);
        if (data.error) {
          throw new Error();
        }
        setState({ ...state, users: data.results });
      })
      .catch((err) => {
        // console.dir(err);
        setState({ ...state, error: err });
      })
      .finally(() => {
        setState({ ...state, isFetching: false });
      });
  };

  useEffect(() => {
    load();
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.currentPage !== prevState.currentPage) {
  //     this.load();
  //   }
  // }

  const prevPage = () => {
    if (state.currentPage > 1) {
      setState({ ...state, currentPage: state.currentPage - 1 });
    }
  };

  const nextPage = () =>
    setState({ ...state, currentPage: state.currentPage + 1 });

  if (state.error) {
    return <Error />;
  }
  return (
    <section>
      <h2>'Users': 'Користувачі'</h2>
      <div>
        <button onClick={prevPage} disabled={state.currentPage === 1}>
          &lt; prev
        </button>
        <span>&nbsp;{state.currentPage}&nbsp;</span>
        <button onClick={nextPage}>next &gt;</button>
      </div>
      <ul>
        {state.isFetching && <Spinner />}
        {state.isFetching ||
          state.users.map((user) => (
            <li key={user.login.uuid}>{user.email}</li>
          ))}
      </ul>
    </section>
  );
};

export default UsersLoader;
