import Board from "./Board";
import 'bootstrap/dist/css/bootstrap.min.css'

const Container = () => {


  return (
    <div className="container">
      <div className="board-container">
        <Board/>
      </div>
    </div>
  );
};

export default Container;
