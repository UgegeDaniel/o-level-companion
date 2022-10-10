import { Button, Container, Paper, Card, CardContent } from '@material-ui/core'
import { useStyles } from '../components/styles'
import { useState, useEffect } from 'react'
import { isPresent, handleChoice, handleSubmit } from '../utils'
import { QuestionCardTop, Options, QuestionNav, Timer } from '../components/Question'
import dummyData from '../components/dummyData'
import { Link } from 'react-router-dom'
import {Skeleton} from '../components'

const Question = ({ timer, setTimer, attempts, setAttempts, setMarked, marked, testParams }) => {
    const classes = useStyles();
    const [submitted, setSubmitted] = useState(false)
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0)
    const currentQuestion = questions.length > 0 && questions[questionIndex]
    const answers = questions?.map((question) => question.answer)

    const [attemptedNumbers, setAttemptedNumbers] = useState([])
    const [attemptedAnswers, setAttemptedAnswers] = useState([])
    const [selectedAnswers, setSelectedAnswers] = useState([])

    const { question, option, image: questionImage } = currentQuestion
    const answeredNumber = isPresent(attemptedNumbers, questionIndex + 1) ? 'contained' : 'text'


    const setters = { setSelectedAnswers, setAttemptedNumbers, setAttemptedAnswers, setAttempts }
    const values = { attemptedNumbers, questionIndex, attemptedAnswers, selectedAnswers, attempts }
    const choiceHandler = (e) => handleChoice(e, setters, values)

    const handleSetters = { setSubmitted, setTimer }
    const handleValues = { timer, attempts, answers, testParams }
    const submitHandler = () => { setMarked(handleSubmit(handleSetters, handleValues))}

    
    useEffect(() => {
        console.log({ attemptedNumbers, attemptedAnswers, attempts, selectedAnswers, marked})
    }, [attemptedNumbers, attemptedAnswers, attempts, selectedAnswers, marked])

    const questionTopProps = { answeredNumber, questionIndex, questionImage, question }
    const optionsProps = { option, choiceHandler, attempts, questionIndex }
    const navProps = { setQuestionIndex, questionIndex, questions, attemptedNumbers, answeredNumber }

    return (
        <div className={classes.mc}>
{questions.length === 0 ? <Skeleton/>
:
( <Paper>
                <Container>
                    <Timer timer={timer} setTimer={setTimer} setSubmitted={setSubmitted} />
                    <Card elevation={3}>
                        <CardContent>
                            <QuestionCardTop questionTopProps={questionTopProps} />
                            <Options optionsProps={optionsProps} />
                        </CardContent>
                        <QuestionNav navProps={navProps} />
                        <Link to="/results">
                            <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit" onClick={submitHandler}>Finish and Submit</Button>
                        </Link>
                    </Card>
                </Container>
            </Paper>)
}
           
        </div>
    )
}

export default Question