export const AlertError = {
  message: document.querySelector(".alert-error"),

  open() {
    AlertError.message.classList.add("open");
  },

  close() {
    AlertError.message.classList.remove("open");
  },

  
};
