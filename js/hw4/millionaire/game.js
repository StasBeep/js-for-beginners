let game = {
    score: 0,
    nextQuestionIndex: 0,

    run() {
        if (!this.isQuestionExists()) {
            console.log(`Игра окончена, ваш счёт ${this.score}`);
            this.nextQuestionIndex = 0;
            this.score = 0;
            if(confirm('Хотите сыграть ещё раз?')) {
                thi.run();
            }
            return;
        }
        let result = leader.askQuestion(questions[this.nextQuestionIndex]);
        if(result) {
            this.score++;
        }
        this.nextQuestionIndex++;
        this.run();
    },

    isQuestionExists() {
        return questions[this.nextQuestionIndex] !== undefined;
    },
}

console.log("Наберите в консоли game.run(), чтобы начать игру");