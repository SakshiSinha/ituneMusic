import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

function Newpage(props) {
  var idd = props.id[0];
  var dataaaa = props.datas[0];
  console.log(idd);
  console.log(dataaaa);
  var Maindata = dataaaa.filter(e => e.trackId === idd);
  console.log(Maindata);
  return (
    <div>
      <React.Fragment>
        {Maindata.map(ele => {
          return (
            <div>
              <h2 className="text-center text-danger">Music Details</h2>
              <div className="row bg-info backgroundd col-8 offset-2">
                <div className="col-5 offset-1 border-dark m-2">
                  <img
                    src={ele.artworkUrl100}
                    style={{ height: "300px", width: "300px" }}
                    alt="ige"
                  />
                </div>
                <div className="col-6 m-2">
                  <h1 className="font-weight-bolder text-warning">
                    {ele.artistName}
                  </h1>

                  <h4 className="font-weight-bold text-danger">
                    Track price is:${ele.trackPrice}
                  </h4>

                  <h5>Song:-{ele.collectionName}</h5>
                  <h5>Genre:=>{ele.primaryGenreName}</h5>

                  <a
                    className="btn btn-circle btn-lg text-weight-bold bg-success mr-5"
                    href={ele.previewUrl}
                  >
                    Listen song
                  </a>

                  <a
                    className="btn  btn-circle btn-lg ml-5 bg-success "
                    href={ele.artistViewUrl}
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = state => ({
  total: state.filteredData,
  id: state.id
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Newpage);
