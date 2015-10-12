
(function generateLevel() {

    'use strict';

    var width = 150,
        height = 150;


    /*      1                   N
     *  4   o   2    ==>    W   o   E
     *      3                   S
     * Store the decimal representation of the binary status of the tile
     * e.g. 1001 means that there is a wall to the north and to the west
     *      0000 means that there are no walls
     *      1111 means that there are walls all around
     */
    function generateRecursiveBacktracking(width, height, callback) {

        var start = {},
            visitedPosition = [],
            visited = [],
            finalData = [],
            i = 0;

        function initGrid(grid) {
            var i = 0;
            for (i; i < grid.length; i = i + 1) {
                grid[i] = 15;
            }
        }

        function create(position) {

            var candidate = {};

            function lookForPassage(current) {
                var directions = [], next = {}, nextDirection;
                /**
                 *  Fisher - Yates Shuffle
                 */
                function fyShuffle() {
                    var direction = [1, 2, 3, 4],
                        i = direction.length - 1,
                        j = 0;
                    for (i; i > 0; i = i - 1) {
                        j = Math.floor(Math.random() * i);

                        direction[i] = direction[i] + direction[j];
                        direction[j] = direction[i] - direction[j];
                        direction[i] = direction[i] - direction[j];
                    }
                    return direction;
                }

                function isValidNext(cell) {
                    return (cell.x >= 0 && cell.x < width && cell.y >= 0 && cell.y < height) && (visitedPosition[cell.x][cell.y] === undefined);
                }

                function findNextCoords(current, nextDirection) {
                    var result = {};
                    if (nextDirection === 1) { // go north
                        result = { x : current.x, y : current.y - 1 };
                    } else if (nextDirection === 2) { // go east 
                        result = { x : current.x + 1, y : current.y };
                    } else if (nextDirection === 3) { // go south
                        result = { x : current.x, y : current.y + 1 };
                    } else if (nextDirection === 4) {  // go west 
                        result = { x : current.x - 1, y : current.y };
                    }

                    return result;
                }

                function breakWall(nextDirection) {
                    var result = 0;
                    if (nextDirection === 1) { // go north
                        result = 8;
                    } else if (nextDirection === 2) { // go east 
                        result = 4;
                    } else if (nextDirection === 3) { // go south
                        result = 2;
                    } else {  // go west 
                        result = 1;
                    }
                    return result;
                }

                function breakOpWall(nextDirection) {
                    var result = 0;
                    if (nextDirection === 1) { // go north
                        result = 2;
                    } else if (nextDirection === 2) { // go east 
                        result = 1;
                    } else if (nextDirection === 3) { // go south
                        result = 8;
                    } else {  // go west 
                        result = 4;
                    }
                    return result;
                }

                directions = fyShuffle(directions);
                nextDirection = directions.pop();
                while (!isValidNext(findNextCoords(current, nextDirection))) {
                    if (directions.length === 0) {
                        return null;
                    } else {
                        nextDirection = directions.pop();
                    }
                }

                visited.push(current);
                finalData[current.y * width + current.x] = finalData[current.y * width + current.x] - breakWall(nextDirection);
                next = findNextCoords(current, nextDirection);
                finalData[next.y * width + next.x] = finalData[next.y * width + next.x] - breakOpWall(nextDirection);
                visitedPosition[next.x][next.y] = 1;

                return next;
            }

            candidate = lookForPassage(position);

            if (candidate !== null) {
                create(candidate);
            } else {
                if (!(position.x === start.x && position.y === start.y)) {
                    create(visited.pop());
                } else {
                    callback(finalData);
                }
            }
        }

        finalData.length = width * height;
        initGrid(finalData);
        for (i = 0; i < width; i = i + 1) {
            visitedPosition[i] = [];
        }

        // 1 Step: select random cell
        start.x = Math.floor(Math.random() * (width - 1));
        start.y = Math.floor(Math.random() * (height - 1));
        visitedPosition[start.x][start.y] = 1;
        // 2 Step: Select random direction
        create(start);
    }

    function printLevel(data) {
        var i = 0, line = [];
        for (i; i < data.length; i = i + 1) {
            line.push(data[i]);
            if (i % Math.sqrt(data.length) === Math.sqrt(data.length) - 1) {
                console.log(line.join(" "));
                line = [];
            }
        }
        console.log(line);
    }

    generateRecursiveBacktracking(width, height, function (data) {
        printLevel(data);
    });

}());