export default class Pagination {
  constructor(totalPages, refs) {
    this.totalPages = totalPages;
    this.refs = refs;
    this.currentPageIndex = '1';
  }

  onPageBtnClick(e) {
    this.currentPageIndex = e.target.dataset.index;
  }

  onNextBtnClick() {
    this.refs.pageButtonsList.children.forEach(button => {
      let btnIndex = button.dataset.index;

      if (btnIndex > this.totalPages) {
        return;
      }

      button.dataset.index = Number(btnIndex) + 1;
      button.textContent = button.dataset.index;
    });

    this.toggleBtnVisibility();
  }

  onPrevBtnClick() {
    this.refs.pageButtonsList.children.forEach(button => {
      let btnIndex = button.dataset.index;

      if (btnIndex <= 0) {
        return;
      }

      button.dataset.index = Number(btnIndex) - 1;
      button.textContent = button.dataset.index;
    });

    this.toggleBtnVisibility();
  }

  toggleBtnVisibility() {
    const buttonsList = this.refs.pageButtonsList.children;
    const firstBtnIndex = buttonsList[0].dataset.index;
    const lastBtnIndex = buttonsList[4].dataset.index;

    if (firstBtnIndex === '1') {
      this.hidePrevButton();
    } else {
      this.showPrevButton();
    }

    if (lastBtnIndex >= this.totalPages) {
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

  get currentPage() {
    return this.currentPageIndex;
  }
}
