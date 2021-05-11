export default class Pagination {
  constructor(totalPages, refs) {
    this.totalPages = totalPages;
    this.refs = refs;
    this.currentPageIndex = '1';

    this.createButtons();
    this.hidePrevButton();
    this.setLastPageBtn();
  }

  createButtons() {
    const buttons = [];

    for (let i = 1; i <= this.totalPages; i += 1) {
      if (i > 5) {
        break;
      } else {
        const newButton = document.createElement('button');
        newButton.classList.add('page-button');
        newButton.textContent = i;
        newButton.setAttribute('data-index', i);
        buttons.push(newButton);
      }
    }

    this.refs.pageButtonsList.append(...buttons);

    if (this.totalPages <= 5) {
      this.hideNextButton();
    }
  }

  onPageBtnClick(e) {
    this.currentPageIndex = e.target.dataset.index;
  }

  setLastPageBtn() {
    this.refs.lastPage.textContent = this.totalPages;
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
    this.refs.firstPage.classList.remove('visually-hidden');
    this.refs.prevBtnRef.classList.remove('visually-hidden');
    this.refs.leftDotsRef.classList.remove('visually-hidden');
  }

  hidePrevButton() {
    this.refs.firstPage.classList.add('visually-hidden');
    this.refs.prevBtnRef.classList.add('visually-hidden');
    this.refs.leftDotsRef.classList.add('visually-hidden');
  }

  showNextButton() {
    this.refs.lastPage.classList.remove('visually-hidden');
    this.refs.nextBtnRef.classList.remove('visually-hidden');
    this.refs.rightDotsRef.classList.remove('visually-hidden');
  }

  hideNextButton() {
    this.refs.lastPage.classList.add('visually-hidden');
    this.refs.nextBtnRef.classList.add('visually-hidden');
    this.refs.rightDotsRef.classList.add('visually-hidden');
  }

  get currentPage() {
    return this.currentPageIndex;
  }
}
