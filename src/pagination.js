export default class Pagination {
  constructor(totalPages, maxPages, pageButtonsList) {
    this.totalPages = totalPages;
    this.maxPages = maxPages;
    this.buttonsRef = pageButtonsList;
  }

  onNextBtnClick() {
    this.buttonsRef.children.forEach(button => {
        let btnIndex = button.dataset.action;
    

      if (btnIndex > this.totalPages - this.maxPages) {
        return;
      }

      button.dataset.action = Number(btnIndex) + this.maxPages;
      button.textContent = button.dataset.action;
    });

    // this.toggleBtnVisibility();
  }

  onPrevBtnClick() {
    this.buttonsRef.children.forEach(button => {
      let btnIndex = button.dataset.action;

      if (btnIndex <= this.maxPages) {
        return;
      }

      button.dataset.action = Number(btnIndex) - this.maxPages;
      button.textContent = button.dataset.action;
    });

    this.toggleBtnVisibility();
  }

  toggleBtnVisibility() {
    const buttonsList = this.buttonsRef.children;
    const firstBtnIndex = buttonsList[0].dataset.action;

    if (firstBtnIndex === '1') {
      this.hidePrevButton();
    } else {
      this.showPrevButton();
    }

    if (firstBtnIndex >= this.totalPages - this.maxPages) {
      this.hideNextButton();
    } else {
      this.showNextButton();
    }
  }
}