document.addEventListener("DOMContentLoaded", () => {
    // Lấy thẻ chứa bảng trò chơi
    const gameBoard = document.getElementById("game-board");
    
    // Khởi tạo mảng lưu trạng thái ô số trong bảng
    const grid = Array.from({ length: 16 }, () => 0);

    // Hàm tạo ra vị trí ngẫu nhiên cho ô trống
    function getRandomEmptyCell() {
        const emptyCells = grid.filter((cell) => cell === 0);
        if (emptyCells.length === 0) return -1;
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        return grid.indexOf(0, randomIndex);
    }

    // Hàm cập nhật giao diện trò chơi
    function render() {
        gameBoard.innerHTML = "";
        grid.forEach((value, index) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = value > 0 ? value : "";
            gameBoard.appendChild(cell);
        });
    }

    // Hàm thêm một ô số mới (2 hoặc 4) vào ô trống ngẫu nhiên
    function addNewTile() {
        const emptyCellIndex = getRandomEmptyCell();
        if (emptyCellIndex !== -1) {
            grid[emptyCellIndex] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    // Hàm xử lý sự kiện phím bàn phím
    document.addEventListener("keydown", (event) => {
        let moved = false;
        switch (event.key) {
            case "ArrowUp":
                // Xử lý sự kiện di chuyển lên
                moved = moveUp();
                break;
            case "ArrowDown":
                // Xử lý sự kiện di chuyển xuống
                moved = moveDown();
                break;
            case "ArrowLeft":
                // Xử lý sự kiện di chuyển sang trái
                moved = moveLeft();
                break;
            case "ArrowRight":
                // Xử lý sự kiện di chuyển sang phải
                moved = moveRight();
                break;
        }

        if (moved) {
            addNewTile();
            render();
            // Implement logic để kiểm tra kết thúc trò chơi và điều kiện chiến thắng
        }
    });

    // Hàm di chuyển ô số lên
    function moveUp() {
        let moved = false;
        for (let col = 0; col < 4; col++) {
            for (let row = 1; row < 4; row++) {
                let currentValue = grid[row * 4 + col];
                if (currentValue !== 0) {
                    let newRow = row - 1;
                    while (newRow >= 0) {
                        let newValue = grid[newRow * 4 + col];
                        if (newValue === 0) {
                            // Ô số trống, di chuyển ô số hiện tại lên
                            grid[newRow * 4 + col] = currentValue;
                            grid[row * 4 + col] = 0;
                            row = newRow + 1;
                            moved = true;
                        } else if (newValue === currentValue) {
                            // Gộp ô số nếu giá trị giống nhau
                            grid[newRow * 4 + col] = newValue * 2;
                            grid[row * 4 + col] = 0;
                            moved = true;
                            break;
                        } else {
                            // Không thể di chuyển nữa
                            break;
                        }
                        newRow--;
                    }
                }
            }
        }
        return moved;
    }

    // Hàm di chuyển ô số xuống
    function moveDown() {
        let moved = false;
        for (let col = 0; col < 4; col++) {
            for (let row = 2; row >= 0; row--) {
                let currentValue = grid[row * 4 + col];
                if (currentValue !== 0) {
                    let newRow = row + 1;
                    while (newRow < 4) {
                        let newValue = grid[newRow * 4 + col];
                        if (newValue === 0) {
                            // Ô số trống, di chuyển ô số hiện tại xuống
                            grid[newRow * 4 + col] = currentValue;
                            grid[row * 4 + col] = 0;
                            row = newRow - 1;
                            moved = true;
                        } else if (newValue === currentValue) {
                            // Gộp ô số nếu giá trị giống nhau
                            grid[newRow * 4 + col] = newValue * 2;
                            grid[row * 4 + col] = 0;
                            moved = true;
                            break;
                        } else {
                            // Không thể di chuyển nữa
                            break;
                        }
                        newRow++;
                    }
                }
            }
        }
        return moved;
    }

    // Hàm di chuyển ô số sang trái
    function moveLeft() {
        let moved = false;
        for (let row = 0; row < 4; row++) {
            for (let col = 1; col < 4; col++) {
                let currentValue = grid[row * 4 + col];
                if (currentValue !== 0) {
                    let newCol = col - 1;
                    while (newCol >= 0) {
                        let newValue = grid[row * 4 + newCol];
                        if (newValue === 0) {
                            // Ô số trống, di chuyển ô số hiện tại sang trái
                            grid[row * 4 + newCol] = currentValue;
                            grid[row * 4 + col] = 0;
                            col = newCol + 1;
                            moved = true;
                        } else if (newValue === currentValue) {
                            // Gộp ô số nếu giá trị giống nhau
                            grid[row * 4 + newCol] = newValue * 2;
                            grid[row * 4 + col] = 0;
                            moved = true;
                            break;
                        } else {
                            // Không thể di chuyển nữa
                            break;
                        }
                        newCol--;
                    }
                }
            }
        }
        return moved;
    }

    // Hàm di chuyển ô số sang phải
    function moveRight() {
        let moved = false;
        for (let row = 0; row < 4; row++) {
            for (let col = 2; col >= 0; col--) {
                let currentValue = grid[row * 4 + col];
                if (currentValue !== 0) {
                    let newCol = col + 1;
                    while (newCol < 4) {
                        let newValue = grid[row * 4 + newCol];
                        if (newValue === 0) {
                            // Ô số trống, di chuyển ô số hiện tại sang phải
                            grid[row * 4 + newCol] = currentValue;
                            grid[row * 4 + col] = 0;
                            col = newCol - 1;
                            moved = true;
                        } else if (newValue === currentValue) {
                            // Gộp ô số nếu giá trị giống nhau
                            grid[row * 4 + newCol] = newValue * 2;
                            grid[row * 4 + col] = 0;
                            moved = true;
                            break;
                        } else {
                            // Không thể di chuyển nữa
                            break;
                        }
                        newCol++;
                    }
                }
            }
        }
        return moved;
    }

    // Khởi tạo trò chơi bằng cách thêm hai ô số vào bảng
    addNewTile();
    addNewTile();
    render();
});

