export default class Pagination {
  constructor(totalPages, maxPages, refs) {
    this.totalPages = totalPages;
    this.maxPages = maxPages;
    this.refs = refs;
  }

  onNextBtnClick() {
    this.refs.pageButtonsList.children.forEach(button => {
      let btnIndex = button.dataset.index;

      if (btnIndex > this.totalPages - this.maxPages) {
        return;
      }

      button.dataset.index = Number(btnIndex) + this.maxPages;
      button.textContent = button.dataset.index;
    });

    this.toggleBtnVisibility();
  }

  onPrevBtnClick() {
    this.refs.pageButtonsList.children.forEach(button => {
      let btnIndex = button.dataset.index;

      if (btnIndex <= this.maxPages) {
        return;
      }

      button.dataset.index = Number(btnIndex) - this.maxPages;
      button.textContent = button.dataset.index;
    });

    this.toggleBtnVisibility();
  }

  toggleBtnVisibility() {
    const buttonsList = this.refs.pageButtonsList.children;
    const firstBtnIndex = buttonsList[0].dataset.index;

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

  showPrevButton() {
    this.refs.prevBtnRef.classList.remove('visually-hidden');
    this.refs.leftDotsRef.classList.remove('visually-hidden');
  }

  hidePrevButton() {
    this.refs.prevBtnRef.classList.add('visually-hidden');
    this.refs.leftDotsRef.classList.add('visually-hidden');
  }

  showNextButton() {
    this.refs.nextBtnRef.classList.remove('visually-hidden');
    this.refs.rightDotsRef.classList.remove('visually-hidden');
  }

  hideNextButton() {
    this.refs.nextBtnRef.classList.add('visually-hidden');
    this.refs.rightDotsRef.classList.add('visually-hidden');
  }
}
