import React from "react";

export default function withForm({ validate }) {
  return function (WrappedComponent) {
    return class extends React.Component {
      displayName = `withForm(${getDisplayName(WrappedComponent)})`;
      state = {};

      constructor(props) {
        super();
        const { initials = {} } = props;
        const fields = Object.keys(initials).reduce((state, name) => {
          return {
            ...state,
            [name]: {
              name,
              value: initials[name],
              error: validate(name, initials[name], this.state),
              isDirty: false,
              onChange: this.handleChange
            }
          };
        }, {});

        this.state = { ...fields };
      }

      handleChange = e => {
        const { name, checked, value, type = "text", files = [] } = e.target;
        const val =
          type === "checkbox" ? checked : type === "file" ? files : value;
        const error = validate(name, val, this.state);
        this.setState(state => ({
          ...state,
          [name]: { ...state[name], value: val, error, isDirty: true }
        }));
      };

      hasError = () => Object.keys(this.state).some(f => this.state[f].error);

      handleSubmit = e => {
        e.preventDefault();
        const data = Object.keys(this.props.initials).reduce((result, prop) => {
          return {
            ...result,
            [prop]: this.state[prop].value
          };
        }, {});
        this.props.onSubmit(data);
      };

      render() {
        return (
          <WrappedComponent
            {...this.props}
            onSubmit={this.handleSubmit}
            fields={this.state}
            hasError={this.hasError()}
          />
        );
      }
    };
  };
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}
