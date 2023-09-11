import React, { Component } from 'react';
import Error from '../Error';
import Spinner from '../Spinner';

class LoaderEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch('/data/events.json')
      .then((responce) => responce.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render() {
    const { data, isFetching, error } = this.state;
    if (error) {
      return <Error />;
    }
    return (
      <div>
        {isFetching && <Spinner />}
        {isFetching ||
          data.map(({ id, title, date }) => (
            <article key={id}>
              <h3>{title}</h3>
              <h4>{date}</h4>
            </article>
          ))}
      </div>
    );
  }
}

export default LoaderEvents;
