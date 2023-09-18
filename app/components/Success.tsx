import { useRouter } from "next/navigation";

interface ISuccess {
  record: number;
}

const Success = ({ record }: ISuccess) => {
  const router = useRouter();
  const onClick = () => {
    router.replace("/rank");
  };
  return (
    <div className="modal_background">
      <div className="success_background">
        <div className="success_container">
          <div className="success_record">
            <img src="/assets/ic_timer_blue.svg" />
            <span>{record}</span>
          </div>
          <button onClick={onClick} className="btn_success" />
        </div>
      </div>
    </div>
  );
};

export default Success;
