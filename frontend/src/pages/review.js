import { Button, Container, Paper, Card, CardContent, Typography, Chip } from '@material-ui/core'
import { useStyles } from '../components/styles'
import { useState } from 'react'
import { QuestionCardTop, Options } from '../components/Question'
import dummyData from '../components/dummyData'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Review = ({ marked }) => {

  const mockResults = {
    failedNumbers: marked?.wrong?.length > 0 ? marked?.wrong?.map((mark) => mark.number) : [],
  }


  const classes = useStyles();
  const [questions] = useState(dummyData);
  const [reviewIndex, setReviewIndex] = useState(mockResults.failedNumbers[0] - 1)
  const currentQuestion = questions[reviewIndex]


  const testChoice = marked?.wrong?.filter((mark) => {
    if (reviewIndex + 1 === mark.number) {
      return mark.userAnswer
    }
    return ''
  })

  const wrongChoice = testChoice[0].userAnswer

  const answers = questions.map((question) => question.answer)
  const correct = answers[reviewIndex]
  const { question, option, image: questionImage } = currentQuestion
  const answeredNumber = 'contained'
  const choiceHandler = (e) => {
    return
  }
  const questionTopProps = { answeredNumber, questionIndex: reviewIndex, questionImage, question, reviewIndex }
  const optionsProps = { option, attempts: answers, reviewIndex, correct, choiceHandler }

  return (
    <div className={classes.mc}>
      <Paper>
        <Container>
          <Card elevation={3}>
            <CardContent>
              <QuestionCardTop questionTopProps={questionTopProps} />
              <Options optionsProps={optionsProps} />
            </CardContent>
            <Container>
              <div className={classes.my}>
                {mockResults.failedNumbers.map((failedNum, index) => (
                  <Button key={index} onClick={() => setReviewIndex(failedNum - 1)} variant='contained' color={mockResults.failedNumbers[index] === reviewIndex + 1 ? "secondary" : 'primary'}>{failedNum}</Button>
                ))}
              </div>
            </Container>
            <Container>
              <Typography className={classes.my}>You chose : </Typography><Chip name={wrongChoice} color="secondary" avatar={<FaTimes style={{ color: "red" }} />} label={wrongChoice.toUpperCase()} />
            </Container>
            <Container className={classes.my}>
              <Link to="/checkout">
                <Button className={classes.mc} variant='contained' color="primary" size="small" type="submit">Tip the Developer</Button>
              </Link>
              <Link to="/">
                <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">Go to Dashboard</Button>
              </Link>
            </Container>
          </Card>
        </Container>
      </Paper>
    </div>
  )
}

export default Review