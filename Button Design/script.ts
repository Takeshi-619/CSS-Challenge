"use stript";
const parallexBtn = document.querySelector(".button3") as HTMLButtonElement;
const parallex = (e: { clientY: number; clientX: number }) => {
  //   console.log("asd");
  // console.log(e.clientY);
  // console.log(e.clientX);
  const y = e.clientY;
  const x = e.clientX;
  // console.log(y);
  // const xy = 50 % -y;
  // console.log(xy);
};
parallexBtn.addEventListener("mousemove", parallex);
