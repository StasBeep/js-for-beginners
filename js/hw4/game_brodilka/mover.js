let mover = {
    /**
     * Получает и отдаёт направление от пользователя
     * @return {int} Возвращет направление, введёённое пользователем
     */
    getDirection() {
        const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8, 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8, 9');
                continue;
            }
            return direction;
        }
    },

    /**
     * Проверка на выход за границы
     * @param {boolean} nextPoint
     */
    yesPlayerMove(nextPoint) {
        return nextPoint.x >= 0 && nextPoint.x < config.colsCount && nextPoint.y >=0 && nextPoint.y < config.rowsCount;
    },

    /**
     * Отдаёт следующую точку, в которой будет находится пользователь после движения
     * @param {int} direction Направление движения игрока
     * @return {{x: int, y:int}} Следующая позиция игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };

        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
        }

        return nextPosition;
    }
};