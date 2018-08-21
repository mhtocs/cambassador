import React from "react";
import "./Program.css";
import StyledLink from "../utils/StyledLink";
import Share from "./Share";
import Popover from "react-awesome-popover";
import { Motion, spring } from "react-motion";
import Moment from "react-moment";
Moment.globalFormat = "D MMM YYYY";
class Program extends React.Component {
  render() {
    const d = this.props.d;
    // console.log(d);
    return (
      <div id={d.id} className="program-card card">
        <span className="logo-span">
          <img
            alt="P"
            className="program-logo"
            src="https://logo.clearbit.com/airbnb.com"
          />
        </span>
        <span className="text-span">
          <div className="program-card__header">
            <span className="program-card__header--vert">
              <h3 className="program__title">{d.program_name}</h3>
              <h5> Posted by : {d.posted_by}</h5>
            </span>
            <span className="program-card__header--horiz">
              <Popover motion placement="top">
                <button className="program__apply--btn white">Share</button>
                {(popperProps, Arrow) => (
                  <Motion
                    defaultStyle={{ rotateY: 90 }}
                    style={{ rotateY: spring(0) }}
                  >
                    {({ rotateY }) => {
                      var motionStyle = {
                        transform: `${
                          popperProps.style.transform
                        } rotateY(${rotateY}deg)`
                      };
                      return (
                        <div
                          {...popperProps}
                          style={{
                            ...popperProps.style,
                            ...motionStyle,
                            border: "1px solid #DCDEDD",
                            background: "#fff",
                            padding: "0.5em 0"
                          }}
                        >
                          <Share
                            shareUrl={"http://zeloband.com/apply/" + d.id}
                            title={`Make a difference on your campus today!\nApply Now for Campus Ambassador program ${
                              d.program_name
                            } at ${d.company_name.toU}. \nSnippet: ${
                              d.program_summary
                            }`}
                          />
                          {Arrow}
                        </div>
                      );
                    }}
                  </Motion>
                )}
              </Popover>
              <StyledLink
                to={{
                  pathname: "/apply/" + d.id,
                  state: { data: d }
                }}
              >
                <button className="program__apply--btn">Apply</button>
              </StyledLink>
            </span>
          </div>
          <div className="program-card__body">
            {/* <h4 className="program-card__body--title">SUMMARY</h4> */}
            <p className="program-card__body--summary">{d.program_summary}</p>
          </div>
          <div className="program-card__footer">
            <span>
              <h5>
                Posted: <Moment unix>{d.posted_on}</Moment>
              </h5>
            </span>
            <span>
              <h5>
                Deadline: <Moment unix>{d.application_deadline}</Moment>
              </h5>
            </span>
          </div>
        </span>
      </div>
    );
  }
}

export default Program;
