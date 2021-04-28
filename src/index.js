import './styles.css';
import Pagination from './pagination';

const refs = {
  pageButtonsList: document.querySelector('.page-buttons'),
  prevBtnRef: document.querySelector('.prev-button'),
  nextBtnRef: document.querySelector('.next-button'),
  leftDotsRef: document.querySelector('.left-dots'),
  rightDotsRef: document.querySelector('.right-dots'),
};

const pagination = new Pagination(20, 5, refs);
const nextBtnClick = pagination.onNextBtnClick.bind(pagination);
const prevtBtnClick = pagination.onPrevBtnClick.bind(pagination);

refs.nextBtnRef.addEventListener('click', nextBtnClick);
refs.prevBtnRef.addEventListener('click', prevtBtnClick);
refs.pageButtonsList.addEventListener('click', pagination.onPageBtnClick);


// const totalPages = 25;
// const maxPages = 5;
// const pageButtons = refs.pageButtonsList.children;

// function onNextBtnClick() {
//   pageButtons.forEach(value => {
//     let btnIndex = value.dataset.index;

//     if (btnIndex > totalPages - maxPages) {
//       return;
//     }

//     value.dataset.index = Number(btnIndex) + maxPages;
//     value.textContent = value.dataset.index;
//   });

//   toggleBtnVisibility();
// }

// function onPrevBtnClick() {
//   pageButtons.forEach(value => {
//     let btnIndex = value.dataset.index;

//     if (btnIndex <= maxPages) {
//       return;
//     }

//     value.dataset.index = Number(btnIndex) - maxPages;
//     value.textContent = value.dataset.index;
//   });

//   toggleBtnVisibility();
// }

// function toggleBtnVisibility() {
//   const buttonsList = refs.pageButtonsList.children;
//   const firstBtnIndex = buttonsList[0].dataset.index;

//   if (firstBtnIndex === '1') {
//     hidePrevButton();
//   } else {
//     showPrevButton();
//   }

//   if (firstBtnIndex >= totalPages - maxPages) {
//     hideNextButton();
//   } else {
//     showNextButton();
//     }
// }

// function showPrevButton() {
//   refs.prevBtnRef.classList.remove('visually-hidden');
//   refs.leftDotsRef.classList.remove('visually-hidden');
// }

// function hidePrevButton() {
//   refs.prevBtnRef.classList.add('visually-hidden');
//   refs.leftDotsRef.classList.add('visually-hidden');
// }

// function showNextButton() {
//   refs.nextBtnRef.classList.remove('visually-hidden');
//   refs.rightDotsRef.classList.remove('visually-hidden');
// }

// function hideNextButton() {
//   refs.nextBtnRef.classList.add('visually-hidden');
//   refs.rightDotsRef.classList.add('visually-hidden');
// }
