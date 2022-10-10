export const subjects = [
    "english", "mathematics", "commerce", "accounting", "biology", "physics", "chemistry", "englishlit", "government", "crk", "geography", "economics", "irk", "civiledu", "insurance", "currentaffairs", "history"
]

export const years = ["1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccessToken': process.env.ACCESS_TOKEN
    },
    method: "GET",
};
const baseUrl = 'https://questions.aloc.com.ng/api/v2/m?subject='
export const fetchYears = async (params) => {
    const { subject, year, examType } = params
    try {
        const response = await fetch(`${baseUrl}${subject}&year=${year}&type=${examType}`, options)
        const { data } = await response.json()
        console.log(data, params)
    } catch (error) {
        console.log(error)
    }
}

export const fetchQuestions = async (subject = "chemistry", year = "2010", examType = "utme") => {
    try {
        const response = await fetch(`${baseUrl}${subject}&year=${year}&type=${examType}`, options)
        const { data } = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}



