import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { data, View } from "../common/action";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

class Music extends Component {
  constructor() {
    super();
    this.state = {
      searchData: " ",
      totall: []
    };
  }

  search = event => {
    this.setState({ searchData: event.target.value });
  };
  handleView = id => {
    alert(id);
    this.props.view(id);
  };

  handlesubmit = event => {
    
    let value = this.state.searchData;
    console.log(value);
    fetch("https://itunes.apple.com/search?term=" + value).then(data => {
      data.json().then(res => {
        this.setState({ totall: res.results });
        this.props.data(res.results);
      });
    });
  
  };

  render() {
    console.log(this.state.total);

    return (
      <div className="backgroundd">
        <div className="col-10 offset-1">
          <h2 className="font "> Search your favourite Music Artist</h2>
          <div class="input-group mb-3">
            <input
              type="text"
              value={this.state.searchData}
              onChange={this.search}
              class="form-control"
              placeholder="Enter Name"
              aria-describedby="basic-addon2"
            ></input>

            <div class="input-group-append">
              <button
                onClick={this.handlesubmit}
                class="btn  btn-primary btn-outline-secondary"
                type="button"
              >
                Button
              </button>
            </div>
          </div>
          {/* =====================CARDS============================= */}

          <div>
            <div className="row">
              {this.state.totall.map(ele => {
                return (
                  <div className="col-3" key={ele.trackId}>
                    {/* =========================================CARDS FOR RESULY=================== */}
                    <Card
                      className="m-3 "
                      style={{ width: "200px", height: "350px" }}
                    >
                      <CardActionArea>
                        <Link to={`/${ele.trackId}`}>
                          <CardMedia
                            style={{ height: "200px", width: "200px" }}
                            component="img"
                            image={ele.artworkUrl100}
                          />
                          <Button
                            style={{ width: "200px" }}
                            onClick={() => this.handleView(ele.trackId)}
                            variant="contained"
                            color="primary"
                          >
                            OPEN
                          </Button>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {ele.trackName}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              By {ele.artistName}
                            </Typography>
                          </CardContent>
                        </Link>
                      </CardActionArea>
                      <CardActions></CardActions>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <img
          src="https://m.media-amazon.com/images/G/31/digital/music/merch/India/2020/April/MLP-Section_PC_02.jpg"
          style={{ width: "100%" }}
        ></img>
        <img
          src="https://m.media-amazon.com/images/G/31/digital/music/merch/India/2020/April/MLP-Section_PC_03.jpg"
          style={{ width: "100%" }}
        ></img>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.filteredData
});
const mapDispatchToProps = dispatch => ({
  view: payload => dispatch(View(payload)),
  data: payload => dispatch(data(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Music);
