import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Help from "./Help";
import ContactUs from "./ContactUs";
import Music from "./Music";
import Newpage from "./Newpage";
import { connect } from "react-redux";

class Routers extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/help" exact component={Help} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/music" exact component={Music} />

          <Route
            path="/:id"
            exact
            render={props => (
              <Newpage
                datas={this.props.total.filter(
                  e => e.trackId === props.match.params.trackId
                )}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  total: state.filteredData
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
