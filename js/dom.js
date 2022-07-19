const domElement = {
    el: '',
    target: function () {
      this.el = document.querySelector('.target');
    },
    getText: function () {
      return this.el.textContent;
    },
    setText: function (newText) {
      this.el.textContent = newText;
    },
  };