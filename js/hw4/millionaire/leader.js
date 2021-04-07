let leader = {
    askQuestion(questions) {
        let variations = "";
        for(let key in questions.variants) {
            variations += `${key}: ${questions.variants[key]}\n`;
        }
        let answer = prompt(`${questions.text}, варианты ответа:\n${variations}`);
        return answer === questions.correctAnswerIndex;
    }
}