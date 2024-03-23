#This module stores raw data and JS code used to pull data from Loyola Site

"""
JS Code:
var q_list = []
[].forEach.call(questions,
    function(question) {
        q_list.push( [question.innerText,
                question.attributes[1].value])}
)

var questions = document.querySelectorAll('.question');

var questionKeyValuePairs = {};

questions.forEach(function(questionElement, index) {
    
    var questionText = questionElement.innerHTML;

    
    var associatedColleges = questionElement.getAttribute('data-associated-colleges');

    
    questionKeyValuePairs[questionText] = associatedColleges;

    
    console.log(`Question ${index + 1}: ${questionText} - Associated Colleges: ${associatedColleges}`);
});

// Now, questionKeyValuePairs contains the key-value pairs for each question
console.log(questionKeyValuePairs);
"""
def get_raw_data():
    questions_and_answers = [
    ["I have multiple interests and a natural curiosity about the world.",
    "Advertising and Public Relations,Communication Studies,Environmental Policy,Journalism,History,Marketing,Political Science,Sociology"],
    ["I enjoy working with people, and I have strong verbal and written communication skills.",
    "Advertising and Public Relations,Communication Studies,Education,English,Journalism,Marketing,Sports Management,Exercise Science"],
    ["I have interest and/or ability in art.",
    "Art History,Studio Art,Visual Communication,Dance"],
    ["I'm interested in graphic and/or Web design.",
    "Computer Science,Visual Communication"],
    ["I love acting. I was born to be on stage, or at least work behind the curtain.",
    "Theatre"],
    ["I like to sing and/or play musical instruments.",
    "Music"],
    ["I'm interested in filmmaking and media production.",
    "Film and Digital Media"],
    ["I like working with people, and I enjoy variety in my work.",
    "Advertising and Public Relations,Anthropology,Education,History,Journalism,Political Science,Sociology,Sociology and Anthropology"],
    ["I'm interested in intellectual ideas, including those that are shaped by religious beliefs.",
    "History,Philosophy,Religious Studies,Social Work,Theology"],
    ["I have strong verbal ability and enjoy learning about other cultures and civilizations through language and literature.",
    "African Studies and the African Diaspora,Classical Civilization,English,French,Greek,History,Italian,Latin,Spanish,Womens Studies and Gender Studies"],
    ["I'm interested in science and in the ability to think logically.",
    "Biochemistry,Bioinformatics,Biology,Biophysics,Chemistry,Environmental Policy,Environmental Science,Forensic Science,Physics,Theoretical Physics and Applied Mathematics"],
    ["I enjoy learning about living things.",
    "Biochemistry,Bioinformatics,Biology,Biophysics,Chemistry,Education,Environmental Policy,Environmental Science,Forensic Science,Physics"],
    ["I like to experiment with better and faster ways of doing things.",
    "Biochemistry,Bioinformatics,Biology,Biophysics,Chemistry,Environmental Science,Forensic Science,Physics"],
    ["I have a great memory and have the ability to recognize general principles in particular situations.",
    "Biochemistry,Bioinformatics,Biology,Biophysics,Chemistry,Environmental Science,Forensic Science,Physics"],
    ["I like science and math, and I have mechanical aptitude.",
    "Bioinformatics,Communications Networks and Security,Computer Science,Forensic Science,Information Technology,Mathematics and Computer Science,Engineering Science,Software Engineering,Statistics"],
    ["I can work on projects very carefully and thoroughly, with patience and determination.",
    "Bioinformatics,Communications Networks and Security,Computer Science,Forensic Science,Information Technology,Information Systems,Mathematics and Computer Science,Engineering Science,Software Engineering,Statistics"],
    ["I'm interested in law, debate, government, and politics.",
    "Environmental Policy,History,Political Science,PreLaw"],
    ["I'm very independent and inquiring, and I love working with people.",
    "Communication Studies,Education,Human Services,Journalism,Psychology,Sociology,Exercise Science"],
    ["I'm interested in law and human nature, and I have the ability to correlate and reason.",
    "Criminal Justice and Criminology,Political Science,PreLaw"],
    ["I have strong morals and enjoy helping people.",
    "Education,Environmental Policy,Human Services,Nursing,Social Work"],
    ["I'm good with numbers and have a creative imagination.",
    "Accounting"],
    ["I'm good at analyzing, comparing, and interpreting data.",
    "Economics,Finance,Information Systems"],
    ["I'm interested in the way people make their living and how that affects society.",
    "Human Resources Mgmt"],
    ["I have an analytic and systematic mind. I'm also good at organizing and delegating responsibilities.",
    "Operations Management,Sports Management"],
    ["I'm patient and active, and I love working with children.",
    "Education"],
    ["I'm interested in working with sick people, and I have a strong sense of responsibility and sound judgment.",
    "Health Systems Management,Nursing"],
    ["I'm interested in science, enjoy helping people, and have very strong morals.",
    "Environmental Policy,Health Systems Management,PreHealth,Exercise Science"],
    ["I'm very ambitious, highly organized, and love coming up with my own ideas.",
    "Entrepreneurship,Sports Management"],
    ["I'm interested in sustainability initiatives and the environment.",
    "Environmental Policy,Environmental Studies"],
    ["I enjoy learning about different parts of the world.",
    "History,International Business,International Studies"],
    ["I am interested in sustaining the environment.",
    "Environmental Policy"],
    ["I need the freedom to create and be creative.",
    "Dance"],
    ["I love sports.",
    "Sports Management"],
    ["I am interested in physical therapy.",
    "Exercise Science"],
    ["Music is part of my everyday routine. People catch me dancing around a lot.",
    "Dance"]]
    return questions_and_answers

def get_new_data():
    questions_and_answers = [
    ["I enjoy working with people, and I have strong verbal and written communication skills.",
    "Advertising and Public Relations,Communication Studies,Education,English,Journalism,Marketing,Sports Management,Exercise Science"],
    ["I have interest and/or ability in art.",
    "Art History,Studio Art,Visual Communication,Dance"],
    ["I'm interested in graphic and/or Web design.",
    "Computer Science,Visual Communication"],
    ["I like working with people, and I enjoy variety in my work.",
    "Advertising and Public Relations,Anthropology,Education,History,Journalism,Political Science,Sociology,Sociology and Anthropology"],
    ["I have strong verbal ability and enjoy learning about other cultures and civilizations through language and literature.",
    "African Studies and the African Diaspora,Classical Civilization,English,French,Greek,History,Italian,Latin,Spanish,Womens Studies and Gender Studies"],
    ["I'm interested in science and in the ability to think logically.",
    "Biochemistry,Bioinformatics,Biology,Biophysics,Chemistry,Environmental Policy,Environmental Science,Forensic Science,Physics,Theoretical Physics and Applied Mathematics"],
    ["I'm good at analyzing comparing and interpreting data.",
    "Economics,Finance,Information Systems"],
    ["I like science and math, and I have mechanical aptitude.",
    "Bioinformatics,Communications Networks and Security,Computer Science,Forensic Science,Information Technology,Mathematics and Computer Science,Engineering Science,Software Engineering,Statistics"],
    ["I can work on projects very carefully and thoroughly, with patience and determination.",
    "Bioinformatics,Communications Networks and Security,Computer Science,Forensic Science,Information Technology,Information Systems,Mathematics and Computer Science,Engineering Science,Software Engineering,Statistics"],
    ["I'm interested in law, debate, government, and politics.",
    "Environmental Policy,History,Political Science,PreLaw"],
    ["I have strong morals and enjoy helping people.",
    "Education,Environmental Policy,Human Services,Nursing,Social Work"],
    ["I have an analytic and systematic mind. I'm also good at organizing and delegating responsibilities.",
    "Operations Management,Sports Management"],
    ["I'm interested in working with sick people, and I have a strong sense of responsibility and sound judgment.",
    "Health Systems Management,Nursing"],
    ["I'm interested in science, enjoy helping people, and have very strong morals.",
    "Environmental Policy,Health Systems Management,PreHealth,Exercise Science"],
    ["I'm very ambitious, highly organized, and love coming up with my own ideas.",
    "Entrepreneurship,Sports Management"],
    ]
    return questions_and_answers