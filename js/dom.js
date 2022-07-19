const domElement = {
    el: '',
    target: function (selector) {
      this.el = document.querySelector(selector);
    },
    getText: function () {
      return this.el.textContent;
    },
    setText: function (newText) {
      this.el.textContent = newText;
    },
    appendText: function (newText) {
      this.el.textContent += newText;
    },
    getClasses: function () {
      return this.el.className;
    },
    removeEl: function () {
      console.log('bye bye');
      // --- deleting
      this.appendText(' --- deleting!!!');
      setTimeout(() => {
        this.el.remove();
      }, 3000);
    },
  };
  // taikymasis
  domElement.target('.target');
  
  console.log('domElement.getText() ===', domElement.getText());
  domElement.setText('pakeiciau su domElement');
  console.log('domElement.getClasses() ===', domElement.getClasses());
  
  const btn1 = document.querySelector('#btn');
  btn1.textContent = 'Pakeiciau';
  
  btn1.addEventListener('click', () => {
    domElement.removeEl();
  });