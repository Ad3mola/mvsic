import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authentication";
import { useGlobalState } from "../../store/reducers/rootReducer";

function Home() {
  const dispatch = useDispatch();
  const { user } = useGlobalState();

  useEffect(() => {
    dispatch(login());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{user && user.display_name}</div>;
}

export default Home;
