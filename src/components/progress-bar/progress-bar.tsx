import { useAppSelector } from "../../hooks/store"
import { SurveyCard } from "../../types/survey-card"

type ProgressBarProps = {
  survey: SurveyCard
}

export default function ProgressBar({survey}: ProgressBarProps): JSX.Element {
  const savedAnswers = useAppSelector((state) => state.answers).filter((answer) => answer.answers.length !== 0)
  const getProgress = () => {
    let count = savedAnswers.length
    return count / survey.questions.length * 100
  }

  return(
    <div
      className="progress"
      role="progressbar"
      aria-label="Animated striped example"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        style={{ width: `${getProgress()}%` }}
      />
    </div>
  )
}