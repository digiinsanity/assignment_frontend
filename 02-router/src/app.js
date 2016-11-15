import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import magnusTpl from './templates/magnus.hbs'
import sergeiTpl from './templates/sergei.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')

function index() {
  	$app.html(homeTpl())
}

function contact() {
  	$app.html(contactTpl())
}

function notFound() {
  	$app.html(notFoundTpl())
}

function player(name) {
	console.log(name)
	switch (name) {
		case "Sergei":
			$app.html(sergeiTpl())
			break
		case "Magnus":
			$app.html(magnusTpl())
			break
	}
}

router('/', index)
router('/contact', contact)
router('/players/:params', player)
router('*', notFound)
router()
