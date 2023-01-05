import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { fatchShowAction } from "../Actions";
import { showSelector } from "../Selectors";
import { State } from "../Store";

type ShowListProps = {
  show: any[];
  fatchShow: () => void;
};

const ShowList: FC<ShowListProps> = ({ show, fatchShow }) => {
  useEffect(() => {
    fatchShow();
  }, []);
  console.log("show", show);
  return (
    <div>
      {show.map((m) => (
        <div> {m.name}</div>
      ))}
    </div>
  );
};

ShowList.defaultProps = {};

const mapStateToProps = (s: State) => ({
  show: showSelector(s),
});

const mapDispatchToprops = {
  fatchShow: fatchShowAction,
};
export default connect(mapStateToProps, mapDispatchToprops)(memo(ShowList));
