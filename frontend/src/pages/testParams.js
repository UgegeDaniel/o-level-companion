import { Typography, Button, ButtonGroup, Container, Paper, Chip } from '@material-ui/core'
import { useStyles } from '../components/styles';
import { Link } from 'react-router-dom';
//import {subjects, years} from '../api'
import {BouncingLoader} from '../components'
import {useState} from 'react'

const TestParams = ({ setTimer, testParams, setTestParams }) => {
const [subjects, setSubjects] = useState([])
const [years, setYears] = useState([])
    const classes = useStyles();
    const { subject, year, examtype } = testParams

    const handleTestStart = () => {
        setTestParams({ subject: '', year: '', examtype: 'utme' })
        setTimer({ hour: 2, minute: 0, second: 0 })
    }

    return (
        <div>
            {/* <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}> */}
            <Paper>
                <Container>
                    <Typography color="secondary" variant="h5" gutterBottom>How would you like your test ? </Typography>
                    <div className={classes.mc}>

                        <Typography>Subject : </Typography>

{subjects.length === 0 ? <BouncingLoader/> :
                      (  <ul>
                            {subjects.map((subject, index)=> 
                            <Button 
                            key={index} 
                            value={subject} 
                            onClick={(e) => setTestParams({ ...testParams, subject: e.target.textContent })} 
                            className={classes.my} 
                            variant='contained' 
                            color={index % 2 === 1 ? "primary" : "secondary"} 
                            size="small">{subject}
                        </Button>)}
                        </ul>
                  )
}
  </div>

                    <div className={classes.mc}>
                        <Typography>Year : </Typography>
{years.length === 0 ? <BouncingLoader/> :
(
                        <ul>
                            {years.map((year, index)=> 
                            <Button 
                            key={index} 
                            value={year} 
                            onClick={(e) => setTestParams({ ...testParams, year: e.target.textContent })} 
                            className={classes.my} 
                            variant='contained' 
                            color={index % 2 === 1 ? "primary" : "secondary"} 
                            size="small">{year}
                        </Button>)}
                        </ul>
                    )
}
  </div>

                    <div className={classes.mc}>
                        <Typography>Exam Type : </Typography>
                        <ButtonGroup className={classes.mc} variant='contained' color="primary" size="small" disabled disableElevation>
                            <Button>UTME</Button>
                        </ButtonGroup>
                    </div>

                    <Typography>You have chosen to take a test in
                        <Chip color="primary" label={subject} />
                        of <Chip color="primary" label={examtype} />Examinations
                        Year <Chip color="primary" label={year} />
                    </Typography>
                    <Typography>Allotted time : 
                        <Chip color="primary" label="2 hours" />
                    </Typography>
                    <Link to="/questions">
                        <Button className={classes.mc} onClick={handleTestStart} variant='contained' color="secondary" size="small" type="submit">Take Test</Button>
                    </Link>
                </Container>
            </Paper>
            {/* </motion.div> */}
        </div>
    )
}

export default TestParams