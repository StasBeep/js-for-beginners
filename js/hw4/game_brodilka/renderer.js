let renderer = {
    map: "", // свойство для поля

    /**
     * Отображает игру в консоли
     */
    render() {
        for (let i = 0; i < config.rowsCount; i++) {
            for (let j = 0; j < config.colsCount; j++) {
                if (player.x == j && player.y == i) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = "";
    }
}