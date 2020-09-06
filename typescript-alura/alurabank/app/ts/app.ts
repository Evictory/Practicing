const controller = new NegociationController();
document
    .querySelector('.form')
    .addEventListener('submit',controller.add.bind(controller));