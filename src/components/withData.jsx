import React from "react";
import Axios from "axios";

const baseURL = `${process.env.REACT_APP_BASE_URL}`;
const axios = Axios.create({
  baseURL
});

export default function withData(url) {
  return function (WrappedComponent) {
    return class extends React.Component {
      constructor() {
        super();
        this.state = {
          loading: false,
          error: undefined,
          data: undefined
        };
      }

      componentDidMount = () => {
        this.setState({ loading: true });
        axios
          .get(url)
          .then(res => {
            this.setState({ loading: false, data: res.data });
          })
          .catch(error => this.setState({ loading: false, error }));
      };

      render() {
        const { loading, error, data } = this.state;
        if (loading) {
          return <h6>Loading...</h6>;
        }
        if (!!error) {
          return <h6>An Error Occured</h6>;
        }
        return <WrappedComponent {...this.props} data={data} />;
      }
    };
  };
}
