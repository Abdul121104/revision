const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let bgColor = '#';
    for (let i = 0; i < 6; i++) {
      bgColor += hex[Math.floor(Math.random() * 16)];
    }
    console.log(bgcolor);
    return bgColor;
  };
  console.log(randomcolor);
  const changeColor = function () {
    document.body.style.backgroundColor = randomcolor();
  };
  document.querySelector('#start').addEventListener('click', changeColor);