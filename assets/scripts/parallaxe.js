// Langage : javascript

const offsetTop = (element, accumulator = 0) => {
  if (element.offsetParent) {
    return offsetTop(element.offsetParent, accumulator + element.offsetTop);
  }
  return accumulator + element.offsetTop;
};

//Script inspiré de https://www.youtube.com/watch?v=55NsKxpUYjQ
class ParallaxObject {
  constructor(element, effectRatioX, effectRatioY) {
    this.element = element;
    this.effectRatioX = effectRatioX;
    this.effectRatioY = effectRatioY;
    this.scrollListener = this.scrollListener.bind(this);
    document.addEventListener("scroll", this.scrollListener);
  }

  scrollListener = () => {
    console.log("scrollListener");
    const scrollEffectX = window.pageYOffset * this.effectRatioX;
    const scrollEffectY = window.pageYOffset * this.effectRatioY;

    if (
      this.element.getAttribute("data-effety") &&
      this.element.getAttribute("data-effetx")
    ) {
      this.element.style.transform = `translate3d(${scrollEffectX}px, ${scrollEffectY}px, 0)`;
    } else if (this.element.getAttribute("data-effety")) {
      this.element.style.transform = `translate3d(0, ${scrollEffectY}px, 0)`;
    } else if (this.element.getAttribute("data-effetx")) {
      this.element.style.transform = `translate3d(${scrollEffectX}px, 0, 0)`;
    }
  };

  static bind = () => {
    Array.from(
      document.querySelectorAll("[data-effetx], [data-effety]")
    ).forEach((element) => {
      const effectRatioX = parseFloat(element.getAttribute("data-effetx")) || 0;
      const effectRatioY = parseFloat(element.getAttribute("data-effety")) || 0;
      new ParallaxObject(element, effectRatioX, effectRatioY);
    });
  };
}

ParallaxObject.bind();
