import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";

export default function ResultPage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctCountLen = location.state.correctCountLen;

  return (
    <>
      <h1>結果発表</h1>
      <p>あなたの正解数は</p>
      <p>{`全${maxQuizLen}問中、${correctCountLen}問正解でした`}</p>
        <Link to={ROUTES.QUIZ}>もう一度挑戦する</Link>
    </>
  )
}
