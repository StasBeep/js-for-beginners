let game = {
    /** 
     * Запуск игры
     */
    run() {
        while(true){
            const direction = mover.getDirection();
            if(direction === null){
                console.log("Игра окончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    // Метод выполнения при открытии страницы
    init() {
        console.log("Ваше положение га поле в виде о");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter");
    }
};

game.init();