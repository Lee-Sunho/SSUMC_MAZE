import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { startGame } from "../redux/controlSlice";

interface IFail {
  record: number;
}

const Fail = ({ record }: IFail) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const retry = () => {
    dispatch(startGame());
  };

  const exit = () => {
    sessionStorage.setItem("hasVisited", "false");
    router.replace("/");
  };
  return (
    <div className="modal_background">
      <div className="fail_background">
        <div className="fail_container">
          <div className="record">
            <img src="/assets/ic_timer_blue.svg" />
            <span>{record}</span>
          </div>
          <div className="failbtn_container">
            <button onClick={retry} className="btn_retry" />
            <button onClick={exit} className="btn_exit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fail;
