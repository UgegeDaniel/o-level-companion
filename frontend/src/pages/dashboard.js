import { Line } from 'react-chartjs-2'
//import moment from 'moment'
import Chart from 'chart.js/auto';
import { Chip, Button, Container, Paper, Card, CardHeader, CardContent, CardActions, IconButton, Avatar, } from '@material-ui/core'
import { theme, useStyles } from '../components/styles'
import { FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { deepPurple } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';
import InputField from '../components/Form/InputField';


const Dashboard = ({ marked }) => {
    const classes = useStyles();
    const [userHistory, setUserHistory] = useState([])
    const percentage = ((marked?.correct?.length / 40) * 100).toFixed(2)

    useEffect(() => {
        if(!marked || !marked?.correct?.length){
            return
        }
        else{
            setUserHistory([...userHistory, { id: marked?.timeTaken, subject: marked?.subject, scores: percentage, timeTaken: marked?.timeTaken }])
        }
    }, [])

    // timeTaken: ["Today", "Yesterday", "2 days ago", "11/09", "13/08", "15/07"],
    // percentages: [33, 53, 85, 41, 44, 65]
    const data = {
        labels: userHistory.map((data) => data.timeTaken),
        datasets: [
            {
                label: `Scores (%) in ${marked.subject}`,
                data: userHistory.map((data) => data.scores),
                fill: false,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main,
                borderWidth: 2,
            },
        ]
    };
    const options = {
        title: { display: true, text: 'Your Scores', fontSize: 25 },
        legend: { display: true, position: 'top' }
    }

    const mockUserData = {
        userName: "UDanny",
        email: "ugege62@gmail.com"
    }
    const scores = userHistory.map((data) => data.scores)
    const size = scores.length
    const average = (scores) => {
        const total = scores.reduce((total, score) => {
            total += score;
            return total
        }, 0)
        return total
    }
    const averageScore = (average(scores) / size).toFixed(2)
    return (
        <div className={classes.mc}>
            {/* <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}> */}
            <Paper>
                <Container>
                    <Card elevation={3}>
                        <CardHeader
                            action={
                                <IconButton>
                                    <Avatar style={{ backgroundColor: deepPurple[500] }}>{mockUserData.userName.charAt(0)}</Avatar>
                                </IconButton>
                            }
                            title={<Chip style={{ color: "#fff" }} avatar={<Avatar>{<FaUser />}</Avatar>} label={mockUserData.userName} color="primary" />}
                            subheader={<Chip style={{ color: "#fff", marginTop: "5px" }} avatar={<Avatar>@</Avatar>} label={mockUserData.email} color="secondary" />} />
                        <CardContent>
                            You have taken<Button color="primary" disableElevation>{userHistory?.length}</Button>Test(s).
                            <div className={classes.mc}>
                                <div>
                                    <Line data={data} className={classes.chart} options={options} />
                                </div>
                            </div>
                            You have an overall average of <Button color="secondary" disableElevation>{averageScore}</Button>%  per test
                        </CardContent>
                        <CardActions>
                            <Link to="/testparams"><Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">Take A Test</Button></Link>
                        </CardActions>
                    </Card>
                </Container>
            </Paper>
            {/* </motion.div> */}
        </div>



    )
}

export default Dashboard