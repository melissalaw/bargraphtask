// generate the graph's bars using this data array

var data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]

var xpos = 20;

for (var i = 0; i < data.length; i += 2) {
    var bar = document.createElement('div');
    bar.setAttribute('class', 'bar');
    document.getElementById('frame').appendChild(bar);
    bar.style.left = xpos + 'px';
    bar.style.height = 4 * data[i + 1] + 'px';
    bar.style.background-color = data[i];
    xpos += 40;
}
