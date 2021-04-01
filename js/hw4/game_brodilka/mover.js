let mover = {
    /**
     * Получает и отдаёт направление от пользователя
     * @return {int} Возвращет направление, введёённое пользователем
     */
    getDirection() {
        const availableDirection = [2, 4, 6, 8];
        while (true) {
            let direction = parseInt(prompt('Введите число (2, 4, 6 или 8), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8');
                continue;
            }
            return direction;
        }
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
        }

        return nextPosition;
    }
};