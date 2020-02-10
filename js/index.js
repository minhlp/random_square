document.addEventListener('DOMContentLoaded', function(event) {
  initSquare = function(value) {
    var container = document.getElementById('squareContainer');
    container.innerHTML = '';
    for (var i = 0; i < value; i++) {
      const div = document.createElement('div');
      div.id = `square${i}`;
      div.className = 'square';
      const square = new Square(div.id);
      div.style.cssText = initCSS(square);
      div.innerText = showContent();
      div.onclick = function() {
        square.clicked();
        div.innerText = showContent();
        div.style.cssText = initCSS(square);
      };
      container.appendChild(div);
    }
  };
  initCSS = function(square) {
    return `width: ${square.width}px; height:${square.height}px; background-color:${square.color}`;
  };
  showContent = function(square) {
    return `clicked ${square.clickedNum} times`;
  };
});
class Square {
  constructor(id) {
    this.id = id;
    this.clickedNum = 0;
    this.width = 128;
    this.height = 128;
    this.color = this.generateColor();
  }
  clicked() {
    this.clickedNum += 1;
    this.color = this.generateColor();
  }

  generateColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
