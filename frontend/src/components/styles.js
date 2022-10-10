import { makeStyles, createTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FAC898'
        },
        secondary: {
            main: '#C3B1E1'
        }
    },
    typography: {
        fontFamily: 'Quicksand',
        //remember to import this in your css file
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
})
const constants = {
    borderRadius: '15px'
}
export const useStyles = makeStyles((theme) => ({
    error: {
        border: (note) => {
            if (note) {
                return '1px solid red'
            }
        }
    },
    form: {
        padding: 'auto 0',
        margin: 'auto 0',
        width: '97%',
        height: '100%',
    },
    underline:{
        height: "0.25rem",
        width: "5rem",
        background: theme.palette.primary.main,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: constants.borderRadius
    },
    hero:{
        width: '100%',
        height: '100%'
    },
    chart:{
        maxHeight: '40vh',
        maxWidth: '90%',
        // display: "inline-block",
        // margin: "0 auto"
    },
    googleBtn: {
        backgroundColor: red,
        borderRadius: constants.borderRadius
    },
    btn:{
        borderRadius: "15px"
    },

    mc: {
        margin: '10px auto',
        display: 'block',
        width: 'auto'
    },
    mr: {
        marginRight: 20,
        marginTop: 20,
        marginBottom: 5
    },
    mt: {
        marginTop: 20
    },
    my: {
        marginTop: 10,
        marginBottom: 10
    },
    ml: {
        marginLeft: 20
    },
    imgPaper: {
        margin: '10px auto',
        paddingLeft: '100px',
        paddingTop: '80px',
        paddingBottom: '80px',
        display: 'block',
        height: '100%'
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20,
        padding: theme.spacing(3)
    },
    field: {
        marginTop: 10,
        marginBottom: 10,
        display: 'block',
        padding: 10,
        textAlign: 'center',
        fontSize: '8px'
    },
    paper: {
        padding: '40px'
    },
    img: {
        width: '150px',
        height: '150px',
        margin: '10px auto',
        borderRadius: '38% 62% 53% 47% / 40% 41% 59% 60%',
        border: '1px solid hsl(250, 34%, 43%)'
    },
    middleImg: {
        marginLeft: 20,
        zIndex: 3
    },
    bottomImg: {
        marginTop: -200,
        marginLeft: -120
    },
    topImg: {
        marginBottom: -30,
        marginLeft: -25
    },
    googleButton: {
        marginBottom: theme.spacing(2),
        marginRight: 20
    },
    notification:{
        position: "absolute",
        left: '10vw',
        marginTop: '20px',
    },

    avatar1: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      logoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      logo:{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "10px"
      },
      header:{
        display: "flex",
        justifyContent: 'space-between',

      },
      [theme.breakpoints.down('sm')]: {
        examBodies: {
            display: "none",
          },
      },
    toolbar: theme.mixins.toolbar, //add this class to an div that comes before the page content
}))