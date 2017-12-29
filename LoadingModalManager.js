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
