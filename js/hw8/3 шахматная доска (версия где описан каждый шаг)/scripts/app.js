let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        //генерируем доску
        let board = this.generateBoard();
        //добавляем доску в body
        document.body.innerHTML = board;
        //помещаем на доску все фигуры кроме пешек
        this.insertFiguresOnDesk();
        //добавляем пешки
        this.insertPawns();
        //добавляем колонку с номерами строк
        this.insertRowsNumbers();
        //добавляем строку с названиями колонок
        this.insertColsChars();
    },

    /**
     * Метод вставляет пешки на доску.
     */
    insertPawns() {
        // 6. получаем все теги td из 7 линии игрового поля, туда мы будем вставлять белые пешки
        let whitePawnsRow = document.querySelectorAll();
        for (let i = 0; i < whitePawnsRow.length; i++) {
            // 6.1 вставляем в текущий тег td белую пешку
            whitePawnsRow[i].innerHTML = this.getFigure(, );
        }

        // 6.2 получаем все теги td из 2 линии игрового поля, туда мы будем вставлять черные пешки
        let blackPawnsRow = document.querySelectorAll();
        for (let i = 0; i < blackPawnsRow.length; i++) {
            // 6.3 вставляем в текущий тег td черную пешку
            blackPawnsRow[i].innerHTML = this.getFigure(, );
        }
    },

    /**
     * Метод вставляет на доску все фигуры, кроме пешек.
     */
    insertFiguresOnDesk() {
        // 5. в цикле перебираем массив positions
        for (let i = 0; i < ; i++) {
            // 5.1 получаем ссылку на тег td с атрибутами data-rownum и data-colchar, которым будут соответствовать свойства
            // coordRow и coordCol из массива positions
            let cell = document.querySelector(`[data-rownum="${positions[i].}"][data-colchar="${positions[i].}"]`);
            // 5.2 из массива positions, для текущего объекта по индексу i, передаем название фигуры, затем цвет+"Figure"
            let figure = this.getFigure(positions[i]., positions[i].+"Figure");
            // 5.3 в innerHTML текущей ячейки ставим figure
            cell. = ;
        }
    },

    /**
     * Метод возвращает тег i в виде строки, с подставленным именем
     * фигуры и классом, управляющим цветом фигуры.
     * @param {string} name название фигуры, возможные значения rook, knight, bishop, queen, king, pawn.
     * @param {string} colorClass цвет фигуры, м.б. "whiteFigure", "blackFigure".
     * @returns {string} 
     */
    getFigure(name, colorClass) {
        // 4. возвращаем в виде строки html-разметку фигуры, пример фигуры смотрите здесь https://fontawesome.com/icons/chess-rook?style=solid
        return `<i class="fas fa-chess-${} ${}"></i>`; // вставьте в ${} нужные значения
    },

    /**
     * Метод генерирует игровое поле 8 на 8.
     * @returns {string} html разметка в виде строки.
     */
    generateBoard() {
        // 3. создаем переменную board и присваиваем ей пустую строку, в ней будет храниться разметка игрового поля в виде строки
        
        // 3.1 создаем переменную rowStartWithColor, в которой укажем, что линия на игровом поле будет начинаться с белого цвета
        // т.е. присваиваем строку "white"
        
        // 3.2 в цикле перебираем все строки из конфига
        for (let i = 0; i < ; i++) {
            // 3.3 здесь в переменной row в виде строки будет храниться разметка для линии на поле (тег tr),
            // сейчас туда присваиваем пустую строку
            let row = "";
            // 3.4 проверяем, начинаем ли мы линию (переменная rowStartWithColor) с белого цвета (строка "white")
            if (rowStartWithColor == 'white') {
                // 3.5 в переменную row записываем результат работы функции this.generateRow,
                // которой передали цвет, с которого начинается линия на поле, а также this.config.rows[i]
                row = this.generateRow(, this.config.rows[i]);
                // 3.6 затем меняем rowStartWithColor на "black"
                
            } else {
                // 3.7 делаем то же что и в п. 1.5
                row = this.generateRow(, this.config.rows[i]);
                // 3.8 меняем rowStartWithColor на "white"
                
            }
            // 3.9 в board дописываем с помощью +=, то что получилось в переменной row
            board += row;
        }
        return `<table>${board}</table>`;
    },

    /**
     * Метод генерирует тег tr (строку игровой доски) с закрашенными тегами
     * td (ячейкам).
     * @param {string} startWithColor с какого цвета строка начинается от левого края,
     * м.б. "white", "black".
     * @param {number} rowNum номер строки от 8 до 1, т.к. шахматная доска формируется
     * сверху вниз, поэтому номер начинается с 8.
     * @returns {string} html-разметка, тег tr с оформленными внутри тегами td.
     */
    generateRow(startWithColor, rowNum) {
        // 2. создаем переменную currentColorClass, в которую пишем startWithColor
        
        // 2.1 создаем переменную row и присваиваем ей пустую строку, в ней будет храниться набор тегов td в виде
        // строки, т.е. это будет одна линия игрового поля
        
        // 2.2 в цикле перебираем массив cols из config
        for (let i = 0; i < ; i++) {
            // 2.3 создаем переменную field, в которую записываем пустую строку, это будет тег td, ячейка игрового поля
            
            // 2.4 проверяем, равняется ли currentColorClass строке "white"
            if () {
                // 2.5 в переменную field пишем результат вызова функции this.generateField, которой передаем цвет ячейки игрового
                // поля в виде строки, затем номер строки игровой доски в виде числа, последним аргументом передаем this.config.cols[i]
                 = this.generateField(, , this.config.cols[i]);
                // 2.6 присваиваем в currentColorClass строку "black"
                
            } else {
                // 2.7 делаем то же что и в п. 2.5, только первым параметром передаем "black"
                 = this.generateField(, , this.config.cols[i]);
                // 2.8 переменной currentColorClass присваиваем строку "white"
                
            }
            // 2.9 в переменную row дописываем с помощью += то что получилось в field
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    /**
     * Метод генерирует ячейку (тег td) с нужным классом цвета
     * и координатами на поле.
     * @param {string} color класс цвета ячейки, м.б. "white", "black".
     * @param {number} rowNum номер строки игровой доски.
     * @param {string} colChar буква колонки игровой доски.
     * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета.
     */
    generateField(color, rowNum, colChar) {
        // 1. вставьте нужные значения в атрибуты
        return `<td data-rownum="${}" data-colchar="${}" class="${}"></td>`;
    },

    /**
     * Метод вставляет на существующую доску колонку 
     * слева, с указанием номера строки.
     */
    insertRowsNumbers() {
        // 7. получаем все теги tr
        let trs = document.querySelectorAll();
        // 7.1 перебираем эти теги в цикле
        for (let i = 0; i < ; i++) {
            // 7.2 создаем тег td
            let td = ;
            // 7.3 в текущий тег td в innerText вставляем номер строки из this.config.rows
            td. = this.config.rows[ ];
            // 7.4 получившийся тег td вставляем в текущую строку (тег tr)
            trs[ ].insertAdjacentElement("afterbegin", td);
        }
    },

    /**
     * Метод создает строку (tr) с названиями колонок в виде букв,
     * а также в начале вставляет пустую ячейку, которая идет под
     * цифрами.
     */
    insertColsChars() {
        // 8. создаем тег tr
        let tr = ;
        // 8.1 затем в innerHTML тега tr дописываем пустой тег td
        tr. += '';
        // 8.2 в цикле перебираем колонки из this.config.cols
        for (let i = 0; i < ; i++) {
            // 8.3 в innerHTML с помощью += дописываем тег td c буквой текущей колонки из this.config.cols
            tr. += `<td>${this.config.cols[ ]}</td>`;
        }
        // 8.4 получаем тег tbody
        let tbody = ;
        // 8.5 и в него перед </tbody> вставляем значение из переменной tr
        tbody.insertAdjacentElement(, );
    },
}

app.run();
