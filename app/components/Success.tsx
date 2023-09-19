import { useRouter } from "next/navigation";

interface ISuccess {
  record: number;
}

const Success = ({ record }: ISuccess) => {
  const router = useRouter();

  const clickSound = () => {
    const sound = new Audio("/audio/click.wav");
    sound.play();
  };

  const successSound = () => {
    const sound = new Audio("/audio/success.wav");
    sound.play();
  };

  const onClick = () => {
    clickSound();
    router.replace("/register");
  };

  successSound();
  return (
    <div className="modal_background">
      <div className="success_background">
        <div className="success_container">
          <div className="record">
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
