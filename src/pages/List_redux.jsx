import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../store/slice/listSlice";

import HOC from "../components/HOC";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

const titleLength = (value) => {
  let text = value;

  if (value.length > 20) text = value.substring(0, 20);

  return `${text}...`;
};

const contentLength = (value) => {
  let text = "";

  if (value.length > 100) text = value.substring(0, 100);

  return `${text}...`;
};

const ListRedux = () => {
  const dispatch = useDispatch();
  const { listData, isLoading } = useSelector((state) => state.list);

  useEffect(() => {
    // calling API handler from REDUX
    const timer = setTimeout(() => {
      dispatch(fetchList());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listDisplay = listData.map((val) => (
    <div key={val.id} className="col-md-4 col-lg-3">
      <Card>
        <h4>{titleLength(val.name)}</h4>
        <h6>{val.email}</h6>
        <p style={{ textAlign: "justify" }}>{contentLength(val.body)}</p>
      </Card>
    </div>
  ));

  if (isLoading)
    return (
      <section style={{ textAlign: "center", marginTop: "20px" }}>
        <Spinner />
      </section>
    );

  return (
    <HOC headerTitle="List Redux">
      <h4>Handling request using Redux</h4>
      {/* display handling data */}
      <div className="row">
        {/* row = 12 */}
        {listDisplay}
      </div>
    </HOC>
  );
};

export default ListRedux;
