/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12943
 */
function solution(num) {
  let answer = 0;
  while (num !== 1) {
    if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;
    answer++;
    if (answer >= 500) return -1;
  }
  return answer;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
