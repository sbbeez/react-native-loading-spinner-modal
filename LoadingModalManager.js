// "use strict";
//
// module.exports = {
//   currentLoadingModal: null,
//   registerModal(modal) {
//     this.currentLoadingModal = modal;
//   },
//   unregisterModal() {
//     this.currentLoadingModal = null;
//   },
//   showLoadingModal(newState = null) {
//     if (this.currentLoadingModal === null) {
//       return;
//     }
//
//     this.hideLoadingModal();
//
//     this.currentLoadingModal.setNewState(newState);
//     this.currentLoadingModal.showModal();
//   },
//   hideLoadingModal() {
//     if (this.currentLoadingModal !== null) {
//       this.currentLoadingModal.hideModal();
//     }
//   }
// };

class LoadingModalManager {
  constructor() {
    this.currentLoadingModal = null;
  }
  registerModal = modal => {
    this.currentLoadingModal = modal;
  };

  showLoadingModal = (newState = null) => {
    if (this.currentLoadingModal === null) {
      return;
    }
    if (this.currentLoadingModal !== null) {
      this.hideLoadingModal();
    }
    this.currentLoadingModal.setNewState(newState);
    this.currentLoadingModal.showModal();
  };
  hideLoadingModal = () => {
    this.currentLoadingModal.hideModal();
  };
}

export default new LoadingModalManager();
