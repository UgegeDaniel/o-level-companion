export const handleSubmit = (setters, values) => {
    const { setSubmitted, setTimer } = setters
    const { timer, attempts, answers, testParams } = values
    const timeTaken = new Date().toISOString()
    setSubmitted(true)
    if (timer.hour !== 0 || timer.minute !== 0 || timer.second !== 0) {
        setTimer({ hour: 0, minute: 0, second: 0 })
    }
    const marked = attempts.map((attempt, index) => {
        if (attempts[index].option === answers[index]) {
            return { number: attempt.number, correct: 'correct' }
        } else {
            return { number: attempt.number, wrong: 'wrong', correctAnswer: answers[index], userAnswer: attempts[index].option }
        }
    })
    const { subject } = testParams
    const correct = marked.filter((mark) => mark.correct)
    const wrong = marked.filter((mark) => mark.wrong)
    return { correct, wrong, timeTaken, subject }
}

export const handleFormSubmit = async (e, values, functions) => {
    const { userName, err, error, email, isLogin, password, } = values
    const { log, setNotification, signup, } = functions
    e.preventDefault();
    if (isLogin) {
        await log({ email, password })
    }
    if (error || err) {
        setNotification({ show: true, type: "danger", msg: error || err })
        return
    }
    !isLogin && await signup({ email, password, userName })
    console.log(error)
    !isLogin && setNotification({ show: true, type: "success", msg: 'Congratualations Sign up success !!!' })
    isLogin && setNotification({ show: true, type: "success", msg: 'Congratualations Login success !!!' })
}
export const isPresent = (items, i) => {
    if (items.length === 0) {
        return
    } else {
        return items.includes(i)
    }
}
export const nextQuestion = (questionIndex, size) => {
    if (questionIndex + 1 > size - 1) {
        return questionIndex
    }
    return questionIndex + 1
}

export const previousQuestion = (questionIndex, size) => {
    if (questionIndex - 1 < 0) {
        return questionIndex
    }
    return questionIndex - 1
}

export const previouslyClicked = (attempts, questionIndex) => {
    return attempts.map((attempt) => {
        if (attempt.number === questionIndex + 1) {
            return attempt.answer
        } else {
            return ''
        }
    })
}

export const handleChoice = (e, setters, values) => {
    const clicked = e.target.textContent;
    const option = e.currentTarget.id
    console.log(option)
    const { setSelectedAnswers, setAttemptedNumbers, setAttemptedAnswers, setAttempts } = setters
    const { attemptedNumbers, questionIndex, attemptedAnswers, selectedAnswers, attempts } = values
    setSelectedAnswers([clicked])
    setAttemptedNumbers([...attemptedNumbers, questionIndex + 1])
    setAttemptedAnswers([...attemptedAnswers, ...selectedAnswers])
    const attempt = { number: questionIndex + 1, answer: clicked, option }
    const attempted = isPresent(attemptedNumbers, questionIndex + 1)
    if (attempted) {
        const newAttempts = attempts.map((attempt) => {
            if (attempt.number === questionIndex + 1) {
                return { ...attempt, answer: clicked, option }
            } else {
                return attempt
            }
        })
        setAttempts(newAttempts)
    } else {
        setAttempts([...attempts, attempt])
    }
}

export const payWithPaystack = (e, PaystackPop, credentials, setNotification) => {
    e.preventDault();
    const { amount, email, firstName, lastName } = credentials
    const paystack = new PaystackPop();
    paystack.newTransaction({
        key: process.env.PUBLIC_PAYSTACK_KEY,
        amount: amount * 100,
        email,
        firstName,
        lastName,
        onSuccess(transaction) {
            let msg = `Payment Complete Refeference: ${transaction.reference}`
            setNotification({ show: true, msg, type: "Success" })
        },
        onCancel() {
            setNotification({ show: true, msg: "Transaction Cancelled", type: "danger" })
        }
    })
}