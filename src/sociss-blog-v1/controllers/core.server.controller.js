"user strict";

// Module public methods.
module.exports = {
  renderHomePage : renderHomePage,
  renderContactPage  : renderContact
};

/**
* @name renderHomePage
* @description
* Render homepage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  res.send('This is homepage');
}

/**
* @name renderContact
* @description
* Render contact page.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderContact(req, res) {
  res.send('This is contact');
}
