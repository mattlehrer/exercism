const maxSearchDepth = 100;

const findMinimumMoveNode = (bucketOne, bucketTwo, goal, start) => {
  class Node {
    constructor(inOne, inTwo, movesSoFar) {
      this.inOne = inOne;
      this.inTwo = inTwo;
      this.movesSoFar = movesSoFar;
    }
  }
  
  const isAtGoal = (inOne, inTwo) => (inOne === goal || inTwo === goal);

  const isAtOppositeStart = (inOne, inTwo) => {
    if (start === 'one') {
      return (inOne === 0 && inTwo === bucketTwo);
    } else {
      return (inTwo === 0 && inOne === bucketOne);
    }
  };

  const startingPoint = new Node( start === 'one' ? bucketOne : 0, start === 'two' ? bucketTwo : 0, 1);

  const findAllPaths = current => {
    let nodesAtGoal = [];
    let positions = new Set();
    const findAGoalNode = node => {
      while (!positions.has(JSON.stringify({inOne: node.inOne, inTwo: node.inTwo})) && node.movesSoFar < maxSearchDepth && !isAtGoal(node.inOne, node.inTwo) && !isAtOppositeStart(node.inOne, node.inTwo)) {
        node.movesSoFar++;
        positions.add(JSON.stringify({inOne: node.inOne, inTwo: node.inTwo}));
        // there are six valid moves
        // 1: pour from one to two
        if (node.inOne > 0 && node.inTwo !== bucketTwo) {
          const amountToPour = Math.min(bucketTwo - node.inTwo, node.inOne);
          findAGoalNode(new Node(node.inOne - amountToPour, node.inTwo + amountToPour, node.movesSoFar));
        }
        // 2: pour from two to one
        if (node.inTwo > 0 && node.inOne !== bucketOne) {
          const amountToPour = Math.min(bucketOne - node.inOne, node.inTwo);
          findAGoalNode(new Node(node.inOne + amountToPour, node.inTwo - amountToPour, node.movesSoFar));
        }
        // 3: empty one and do nothing to two
        if (node.inOne > 0) findAGoalNode(new Node(0, node.inTwo, node.movesSoFar));
        // 4: empty two and do nothing to one
        if (node.inTwo > 0) findAGoalNode(new Node(node.inOne, 0, node.movesSoFar));
        // 5: fill one and do nothing to two
        findAGoalNode(new Node(bucketOne, node.inTwo, node.movesSoFar));
        // 6: fill two and do nothing to one
        findAGoalNode(new Node(node.inOne, bucketTwo, node.movesSoFar));
      }
      if (isAtGoal(node.inOne, node.inTwo)) nodesAtGoal.push(node);
    };
    findAGoalNode(current);
    return nodesAtGoal;
  };

  const allPaths = findAllPaths(startingPoint);

  return allPaths.reduce((acc, curr) => acc.movesSoFar < curr.movesSoFar ? acc : curr, new Node(1, 2, 999999));
};

export class TwoBucket {
  constructor(bucketOne, bucketTwo, goal, starterBucket) {
    this.goal = goal;
    this.minimumMoveNode = findMinimumMoveNode(bucketOne, bucketTwo, goal, starterBucket);
  }

  moves() {
    return this.minimumMoveNode.movesSoFar;
  }

  get goalBucket() {
    return this.minimumMoveNode.inOne === this.goal ? 'one' : 'two';
  }

  get otherBucket() {
    return this.goalBucket === 'one' ? this.minimumMoveNode.inTwo : this.minimumMoveNode.inOne;
  }
}
