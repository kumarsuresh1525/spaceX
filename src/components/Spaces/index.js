import React, {memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpaces } from "../../action/spaces";
import { Loading } from '../../common';

const Spaces = () => {
  const dispatch = useDispatch();
  const spaces = useSelector(state => state.spaces);
  const { isFetching, data } = spaces;
  React.useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  console.log(isFetching, data)
  if (isFetching) return <Loading />;
  return (
    <div>
      <h1>SpaceX Launch Programs</h1>
    </div>
  );
}

export default memo(Spaces);